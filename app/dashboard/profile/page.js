import Image from "next/image";
import { Button } from "@mui/material";
import { auth, signOut } from "@/auth";
import { AuthorizationCheck } from "@/config/Authorization-check";

export default async function Profile () {
    const session = await auth();
    return(
       <>
       <AuthorizationCheck/> 
        <main className="min-h-screen flex justify-center py-4 md:py-23 md:px-12 lg:py-12 lg:py-15 lg:px-16">
           <div className="w-full md:w-[360px] flex flex-col gap-4 shadow-lg rounded-md">
             <Image 
             width={80}
             height={80}
            src={session?.user?.image}
             alt="profile-image"
             className="w-[80px] h-[80px] rounded-full "
             />
             <p className="text-center py-3 border-b">{session?.user?.name.toLocaleUpperCase()}User Name</p>
             <p className="text-center py-3 border-b">{session?.user?.Email}</p>
             <p className="text-center py-3 border-b">USER ID: {session.user?.id}</p>
           </div>
           <form action={ async ()=>{
                            "use server"
                            await signOut()
           }} 
           
           >
               <Button type="submit" variant="contained" color="Error" className="w-full">Log Out</Button>
           </form>
        </main>
        </>
    )
}