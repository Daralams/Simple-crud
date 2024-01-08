import React, {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom";

function AddMenu() {
  const [nama, setNama] = useState("")
  const [kategori, setKategori] = useState("--")
  const [harga, setHarga] = useState("")
  const [stok, setStok] = useState("--")
  const navigate = useNavigate()
  const saveMenu = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:3000/menu", {
        nama,
        kategori,
        harga,
        stok
      })
      alert("Add menu succesfully")
      navigate("/")
    } catch (error) {
      alert("Add menu failed!")
      console.error(error.message)
    }
  } 
  return (
    <div className="mt-5 flex justify-center items-center">
      <div className="p-2 md:w-3/5">
        <form className="bg-white p-6 rounded shadow-md leading-10" onSubmit={saveMenu}>
        <h1 className="p-2 text-lg text-center">Add new Food menu</h1>
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
        <button type="submit" className="mt-5 w-full px-4 py-1.5 bg-blue-400 text-white rounded-sm hover:bg-blue-300 text-lg">Save</button>
        </form>
      </div>
    </div>
    )
}

export default AddMenu