   "use client"
import { db } from "@/config/firebase.config";
import { Paper } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function Order ({params}) {
    const {id} = useParams()
    const [orders, setOrders] = useState(null)
    const router = useRouter();
    
    useEffect(()=>{
        const fetchOrders = async ()=>{
            const orderRef = doc(db,"orders",id);
            const snapshot = await getDoc(orderRef);
            //if no order found in the database, redirect the user
            if(!snapShot){
                router.push("/dashboard/new-order")
            }
            setOrders({
                id,
                ...snapShot.data(),
            })
        }
        fetchOrders
    },[id])
    return (
        <main className="min-h-screen flex justify-center ">
            <Paper className="shadow-xl rounded-md p-20 my-20">
                <h1 className="text-2xl text-center text-blue-500 font-bold">order details</h1>
                <div className="flex justify-between items-center gap-15 mb-5">
                    <h1 className="font-semibold text-gray-700">Customer Name</h1>
                    <p className="text-sm text-gray-600">David</p>
                </div>
                <div className="flex justify-between items-center gap-15 mb-5">
                    <h1 className="font-semibold text-gray-700">Service Type</h1>
                    <p className="text-sm text-gray-600">Barbing</p>
                </div>
                <div className="flex justify-between items-center gap-15 mb-5">
                    <h1 className="font-semibold text-gray-700">DeliveryDate</h1>
                    <p className="text-sm text-gray-600">27/11/2025</p>
                </div>
                <div className="flex justify-between items-center gap-15 mb-5">
                    <h1 className="font-semibold text-gray-700">Amount</h1>
                    <p className="text-sm text-gray-600">50000</p>
                </div>
                <div className="flex justify-between items-center gap-15 mb-5">
                    <h1 className="font-semibold text-gray-700">Status</h1>
                    <p className="text-sm text-gray-600">Completed</p>
                </div>
            </Paper>
            <div  className="w-[100px] h-[50px] bg-red-500 rounded-md flex justify-center rounded-md items-center gap-3">
                <button className="flex justify-center gap-3">
                <RiDeleteBin5Fill  className="text-white"/>
                <span>Delete Order</span>
                </button>
            </div>
        </main>
    )
}