import { ProductCard } from "../components/Card"
import { Navbar } from "../components/Navbar"
import Products from "../data/Products.json"

export const ShopPage = () => {
    return(
        <>
        <Navbar focusedPage={2}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {Products.map((product : any) => 
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