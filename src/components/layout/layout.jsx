import { Header } from "../../shared/header/header";
import { Sidenav } from "../../shared/sidenav/sidenav";
import Pageroute from "../pages/pagesRoutes"
export const Layout = () => {
    return (
      <div className="layout">
      <div>
        <Sidenav/> 
        </div>
        <div className="layout-inner">
         <Header/>
        <Pageroute></Pageroute>
        </div>
      </div>
    )
  }
  