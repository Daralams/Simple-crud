import MenuList from "./MenuList"
import {Link} from "react-router-dom"

function MainSection() {
  return (
    <>
    <div className="container mx-auto my-8">
      <div className="overflow-x-auto">
       <div className="py-4">
         <Link to="/addMenu" className="py-2 px-4 rounded bg-green-400 text-white">Add new Food</Link>
       </div>
        <MenuList/>
      </div>
    </div>
    </>
    )
}

export default MainSection