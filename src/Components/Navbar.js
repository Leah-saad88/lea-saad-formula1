import {Link} from 'react-router-dom';
import { useState } from "react";
import '../Assets/navbar.css';
import { menu } from '../Assets/menu.png'; // My friend who works in that feild recommend this and helped me code come from him teaching me a different way and that we can mapp it
const Navbar = () => {
   const [open, setOpen] = useState(false);
     const menuData = [
      { id: 1, path: '/', title: "Home" },
      { id: 2, path: '/Teams', title: "Teams" },
      { id: 3, path: '/Standings', title: "Standings" },
      { id: 4, path: '/Merch', title: "Merch" },
      { id: 5, path: '/Cart', title: "Cart" },
      { id: 6, path: '/Contact', title: "Contact" },
     ]
   
    return(
      <nav className="groupy">
         <div className="burger" onClick={() => setOpen(!open)}>
            <img src={require("../Assets/menu.png")} className="menu-img" />
         </div>
         <div className={open ? "links open" : "links"}>
            {menuData.map((value) =>
               <Link key={value.id} to={value.path} onClick={() => setOpen(false)}>{value.title}</Link>
            )}
         </div>
      </nav>
   );
};



export default Navbar;