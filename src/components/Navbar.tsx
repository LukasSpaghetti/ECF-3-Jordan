import { Link } from "react-router-dom";
import { User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

interface Props {
    focusedPage : Number
}
export const Navbar = ({focusedPage} : Props) => {
    return(
        <nav className="flex items-center justify-between border-solid border-b-1">
            <div>
                <Link to="/home"><img className="px-8 py-4 border-solid border-r-1" src="Jordan.png" alt="" /></Link>
            </div>
            <div>
                <ul className="flex gap-8 py-4">
                    <li className={`px-6 py-2 ${focusedPage == 1 ? "bg-black text-white rounded-full " : ""}`}><Link to="/home">Home</Link></li>
                    <li className={`px-6 py-2 ${focusedPage == 2 ? "bg-black text-white rounded-full " : ""}`}><Link to="/shop">Shop</Link></li>
                    <li className={`px-6 py-2 ${focusedPage == 3 ? "bg-black text-white rounded-full " : ""}`}><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="flex gap-6 px-6 py-6 h-full border-l-1 border-solid">
                <User className="cursor-pointer h-6 w-6"/>
                <ShoppingCart className="cursor-pointer"/>
            </div>
        </nav>
    )
}
