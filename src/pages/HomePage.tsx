import { ProductCard } from "../components/Card"
import { Navbar } from "../components/Navbar"
import Products from "../data/Products.json"
export const HomePage = () => {
    const displayedCards = Products.slice(0, 3)
    return(
        <>
            <Navbar focusedPage={1}/>
            <div>
                <h1 className="text-7xl font-bold py-10 px-1 text-center border-solid border-b-1">JORDAN <span className="text-red-500">NEW COLLECTION</span> AVAILABLE</h1>
            </div>
            <div>
                <img src="./header.png" alt="" />
            </div>
            <div className="flex">
                {displayedCards.map((product : any) => 
                    <ProductCard
                        id={product.id}
                        key={product.id}
                        image={product.image}    
                        title={product.title}    
                        price={product.price} 
                        border={product.border} 
                    />
                )}
            </div>
        </>
    )
}