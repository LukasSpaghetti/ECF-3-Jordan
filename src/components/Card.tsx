import type { Card } from "../interfaces/card.interface"
import { Plus } from 'lucide-react';

export const ProductCard = ({image, title, price, border, id} : Card) => {
    return(
        <div>
            <img src={image} alt={`${id}`} />
            <div className={`flex justify-between items-center p-6 gap-4 ${border ? "border-r-1 border-l-1 border-solid" : ""}`}>
                <div className="flex flex-col gap-4">
                    <p>{title}</p>
                    <p>${price}</p>
                </div>
                <div className="p-2 bg-black rounded-full">
                    <Plus className="cursor-pointer text-white"/>
                </div>
            </div>
        </div>
    )
}