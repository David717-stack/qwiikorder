import { TextField } from "@mui/material"
import { FcGoogle } from "react-icons/fc";

export default function Login () {
    return (
        <main className="min-h-screen flex justify-center px-2 md:px-12 md:py-6 lg:py-12 lg:px-16">
           <div className="w-full md:w-[350px] max-h-[400px] flex flex-col gap-8 rounded md:shadow-md md:px-3 md:shadow-md md:px-3 md:py-4">
              <div>
                <h1 className="text-3xl font-semibold text-center">Login</h1>
                <p className="text-blue-300 text-center">Create an Account or sign in</p>
              </div>
              <form className="justify-center items-center flex">
                <div className="w-full mb-2">
                   <TextField 
                   placeholder="@david.com"
                   type="email"
                   className="w-full"/>
                   <button type="submit" className="text-white bg-blue-500 rounded-md w-full hover:opacity-40 mt-2">Continue</button>
                </div>
              </form>
                 <p className="text-center text-gray-700">Or sign in with</p>
                 <form>
                    <button type="submit" className="w-full h-[45px] rounded-md hover:shadow-md cursor-pointer cursor-pointer flex justif-center items-center gap-3 md:w-full md:hover:shadow-md md:rounded-md">
                      <FcGoogle className="text-2xl"/>
                      <span className="text-gray-800n font-semibold">Sign in with Google</span>
                    </button>
                 </form>
           </div>
        </main>
    )
}



