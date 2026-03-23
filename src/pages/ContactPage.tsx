import { UserPen, Mail, Phone } from 'lucide-react';
import { Navbar } from '../components/Navbar';

export const ContactPage = () => {
    return(
        <>
            <Navbar focusedPage={3}/>
            <div className="grid items-center justify-center gap-8 py-28">
                <h1 className="text-5xl">Let's get in touch</h1>
                <div className='grid gap-4'>
                    <div className="border-1 p-4 flex gap-2 text-xs">
                        <UserPen/>
                        <input className="focus:outline-none placeholder-black" type="text" placeholder="Enter your full name" />
                    </div>
                    <div className="border-1 p-4 flex gap-2 text-xs">
                        <Mail/>
                        <input className="focus:outline-none placeholder-black" type="email" placeholder="Enter your email address" />
                    </div>
                    <div className="border-1 p-4 flex gap-2 text-xs">
                        <Phone/>
                        <input className="focus:outline-none placeholder-black" type="tel" placeholder="06 00 00 00 00" />
                    </div>
                    <textarea placeholder="Enter your main text here ..." className="w-full h-full border-1 p-4 placeholder-black text-xs"name="" id=""></textarea>
                    <div className="flex gap-2">
                        <input type="checkbox" />
                        <p>I hereby agree to our Privacy Policy terms.</p>
                    </div>
                    <input type="submit" value="Submit Form" className="border-1 border-red-500 bg-red-500 py-4 text-white w-full cursor-pointer"/>
                </div>
            </div>
        </>
    )
}