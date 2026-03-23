import { Link } from "react-router-dom";
import { User, ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from "react";
import { MenuBurger } from "./MenuBurger";
interface Props {
    focusedPage : Number
}
export const Navbar = ({focusedPage} : Props) => {

    const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

    return(
        <nav className="flex items-center justify-between border-solid border-b-1 sm:relative">
            <div>
                <Link to="/"><img className="px-8 py-4 border-solid border-r-1" src="Jordan.png" alt="" /></Link>
            </div>
            <ul className="gap-4 py-4 hidden sm:flex">
                <li className={`px-6 py-2 ${focusedPage == 1 ? "bg-black text-white rounded-full " : ""}`}><Link to="/">Home</Link></li>
                <li className={`px-6 py-2 ${focusedPage == 2 ? "bg-black text-white rounded-full " : ""}`}><Link to="/shop">Shop</Link></li>
                <li className={`px-6 py-2 ${focusedPage == 3 ? "bg-black text-white rounded-full " : ""}`}><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="flex gap-6 px-6 py-6  h-full border-none sm:border-l-1 border-solid">
                <User className="cursor-pointer"/>
                <ShoppingCart className="cursor-pointer mr-12 lg:mr-0"/>
                <button
                    onClick={() => setOpenBurgerMenu(!openBurgerMenu)}
                    className="sm:hidden text-black-50 z-51 fixed right-5"
                >
                {openBurgerMenu ? <X className="w-7 h-7"/> : <Menu className="w-7 h-7"/>}
                </button>
                {openBurgerMenu && <MenuBurger/>}
            </div>
        </nav>
    )
}
