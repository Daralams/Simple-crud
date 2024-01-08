import { FaSearch } from "react-icons/fa"

function SearchBar() {
  
  return (
    <div class="py-2">
      <div class="float-right md:w-1/4">
        <form>
          <div className="flex border rounded">
            <input type="text" className="w-4/5 py-1.5 px-3 float-right"
            placeholder="search all menu..."/>
            <button type="submit" className="p-2 bg-transparent"><FaSearch/></button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default SearchBar