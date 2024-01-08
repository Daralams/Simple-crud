import React, {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom";

function EditMenu() {
  const [nama, setNama] = useState("")
  const [kategori, setKategori] = useState("--")
  const [harga, setHarga] = useState("")
  const [stok, setStok] = useState("--")
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { id } = useParams()
  
  useEffect(() => {
    getMenuById()
  },[])
  
  const editMenu = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(`http://localhost:3000/menu/${id}`, {
        nama,
        kategori,
        harga,
        stok
      })
      alert("Menu updated succesfully")
      navigate("/")
    } catch (error) {
      alert("Menu updated failed!")
      console.error(error.message)
    }
  } 
  
  // method for get single data 
  const getMenuById = async() => {
    try {
      const response = await axios.get(`http://localhost:3000/menu/${id}`)
      setNama(response.data.nama)
      setKategori(response.data.kategori)
      setHarga(response.data.harga)
      setStok(response.data.stok)
    } catch (error) {
      setError(error.message)
    }
  }
  
  
  return (
    <div className="mt-5 flex justify-center items-center">
      <div className="p-2 md:w-3/5">
        {error && <p className="my-2 text-red-300 font-mono">Error: {error}</p>}
        <form className="bg-white p-6 rounded shadow-md leading-10" onSubmit={editMenu}>
        <h1 className="p-2 text-lg text-center">Edit Food menu</h1>
        <label for="nama" className="block mb-2 text-bold">Nama</label>
        <input type="text" className="block border w-full p-2 rounded" placeholder="nama menu.." 
        value={nama} 
        onChange={(e) => setNama(e.target.value)}/>
        <label for="kategori" className="block mb-2 text-bold">Kategori</label>
        <select className="block border w-full p-2 rounded bg-white"
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}>
          <option value="--">--</option>
          <option value="makanan">Makanan</option>
          <option value="minuman">Minuman</option>
          <option value="lain-lain">Lain lain</option>
        </select>
        <label for="harga" className="block mb-2 text-bold">Harga</label>
        <input type="number" className="block border w-full p-2 rounded" placeholder="Harga menu..." 
        value={harga} 
        onChange={(e) => setHarga(e.target.value)}/>
        <label for="stok" className="block mb-2 text-bold">Stok</label>
        <select className="block border w-full p-2 rounded bg-white"
        value={stok} 
        onChange={(e) => setStok(e.target.value)}>
          <option value="--">--</option>
          <option value="tersedia">Tersedia</option>
          <option value="habis">Habis</option>
        </select>
        <button type="submit" className="mt-5 w-full px-4 py-1.5 bg-blue-400 text-white rounded-sm hover:bg-blue-300 text-lg">Edit</button>
        </form>
      </div>
    </div>
    )
}

export default EditMenu