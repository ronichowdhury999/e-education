import { Outlet } from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  return (
    <div className="font-roboto">
        {/* <Navbar/> */}
        <Outlet/>
        <ToastContainer />
    </div>
  )
}

export default Root;