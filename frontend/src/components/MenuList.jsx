import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link, useParams} from "react-router-dom"

function MenuList() {
  const [menuList, setMenuList] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('');
  const {id} = useParams()
  
  useEffect(() => {
    getMenuList()
  }, [])
  
  const getMenuList = async () => {
    const response = await axios.get("http://localhost:3000/menu")
    setMenuList(response.data)
  }
  
  const deleteMenu = async (id) => {
    try {
      const confirmasi = confirm("You want delete this menu?")
      if(confirmasi === true) {
        await axios.delete(`http://localhost:3000/menu/${id}`)
        alert("Menu deleted succesfully")
        getMenuList()
      }
    } catch (error) {
      console.error(error.message)
    }
  }
  
  return (
    <>
    <div className="flex justify-center">
      <table class="table-auto min-w-full bg-white border border-gray-300">
      <thead>
      <tr>
       <th className="py-2 px-4 border-b">No</th>
       <th className="py-2 px-4 border-b">Nama</th>
       <th className="py-2 px-4 border-b">Kategori</th>
       <th className="py-2 px-4 border-b">Harga</th>
       <th className="py-2 px-4 border-b">Stok</th>
       <th className="py-2 px-4 border-b">Action</th>
      </tr>
      </thead>
      <tbody>
      {menuList.map((menu, index) => (
      <tr key={menu.id}>
         <td className="py-2 px-4 border-b text-center">{index += 1}</td>
         <td className="py-2 px-4 border-b text-center">{menu.nama}</td>
         <td className="py-2 px-4 border-b text-center">{menu.kategori}</td>
         <td className="py-2 px-4 border-b text-center">{menu.harga}</td>
         <td className="py-2 px-4 border-b text-center">{menu.stok}</td>
         <td className="py-2 px-4 border-b">
           <div className="flex gap-2 justify-center">
            <Link 
            to={`/editMenu/${menu.id}`} 
            className="px-4 py-2 bg-blue-400 text-white hover: bg-blue-300 rounded-sm">Edit</Link>
            <button className="px-4 py-2 bg-red-500 text-white hover: bg-red-400 rounded-sm"
            onClick={() => deleteMenu(menu.id)}>Delete</button>
           </div>
         </td>
        </tr>
      ))}
        </tbody>
      </table>
    </div>
    </>
    )
}

export default MenuList