import {Link} from "react-router-dom"

function PageError() {

  return (
    <div className="p-6">
     <div className="mt-8 flex justify-center items-center" >
      <div className="w-full text-center">
        <h1 className="text-6xl mb-3">☹️</h1>
        <h1 className="font-mono font-bold text-3xl text-red-400 mb-3">404</h1>
        <h3 className="text-red-300 mb-2">Error : Page not found️</h3>
        <p>Go back : 
          <Link to={"/"} className="underline text-indigo-300"> Home</Link>
        </p>
      </div>
     </div>
    </div>
    )
}
export default PageError