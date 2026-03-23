import { Link } from "react-router-dom"

export const MenuBurger = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bg-white/80 z-50 flex flex-col gap-10 pt-12 h-screen p-3">
            <ul className="text-center grid gap-20 py-40 text-3xl">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}