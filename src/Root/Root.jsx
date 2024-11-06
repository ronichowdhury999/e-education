import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <div className="font-roboto">
        {/* <Navbar/> */}
        <Outlet/>
    </div>
  )
}

export default Root;