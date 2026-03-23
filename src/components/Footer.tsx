export const Footer = () => {

    return(
        <>
        <div className="flex flex-col lg:flex-row items-center border border-t-1 justify-between">
            <nav className="grid grid-cols-2 md:grid-cols-3 gap-20 p-6 md:p-10 w-full lg:border-b-0 lg:w-1/2 border-b-1  md:border-r-1 border-solid items-start">
                <div className="grid gap-4">
                    <h3 className="font-bold text-lg">COMPANY</h3>
                    <ul className="grid gap-2">
                        <li><a href="/">About Nike</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">News</a></li>
                        <li><a href="/">Accessibility</a></li>
                    </ul>
                </div>
                <div className="grid gap-4">
                    <h3 className="font-bold text-lg">COLLABORATE</h3>
                    <ul className="grid gap-2">
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Delivery Policy</a></li>
                        <li><a href="/">Terms of Use</a></li>
                        <li><a href="/">Terms of Sale</a></li>
                    </ul>
                </div>
                <div className="grid gap-4">
                    <h3 className="font-bold text-lg">SHOP</h3>
                    <ul className="grid gap-2">
                        <li><a href="/">How to order</a></li>
                        <li><a href="/">Track your order</a></li>
                        <li><a href="/">Return & Exchanges</a></li>
                    </ul>
                </div>
            </nav>
            <div className="px-6 lg:px-10 flex flex-col gap-6 h-52 justify-center lg:h-fit w-full lg:w-1/2">
                <p className="font-bold text-lg">EMAIL ADDRESS</p>
                <div className="flex">
                    <input type="email" placeholder="Enter your email" className="border-b-1 border-t-1 border-l-1 border-solid p-4 pr-16 md:pr-28"/>
                    <input type="submit" value="SUBMIT" className="bg-red-500 px-6 py-4 text-white"/>
                </div>  
            </div>
        </div>
        <div>
            <p className="p-6 md:p-10">© 2026 Nike, Inc. All Rights Reserved</p>
        </div>
        </>
    )
}