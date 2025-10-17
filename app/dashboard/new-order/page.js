"use client"
import { FormControl, InputLabel, MenuItem, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import *as yup from "yup";

const schema = yup.object().shape({
    customerName: yup.string().required("Full name is required").min(10),
    serviceType: yup.string().required("Service type is required").min(10),
    deliveryDate: yup.date().required("Date is required").min(10),
    amount: yup.number().required("Amount is required").min(10),
    status: yup.string().oneOf(["Received", "In-progress", "Completed",]).required("Status is required"),
})

export default function NewOrder() {
    const {handleSubmit,handleChange,handleBlur,Values,errors,touched} =useFormik({
        initialValues: {
            customerName:"",
            serviceType: "",
            deliveryDate: "",
            amount: "",
            status: "",
            notes: "",
        },
        onSubmit: ()=>{
            console.log(`your name is ${Values.customerName}, you book for ${Values.serviceType} and your bill is ${Values>amount}`)
        },
        validationSchema:schema
    })
    return(
        <main className="min-h-screen max-w-2xl mx-auto my-10 px-6 py-8 bg-white shadow-lg rounded-xl">
            <h1 className="text-2xl font-semibold mb-6 text-center">Make Your Oder</h1>
            <form className="flex flex-col gap-4 mt-5">
                <div>
                    <TextField 
                    fullWidth
                    label="Customer Name"
                    placeholder="Enter Full Name"
                    type="text"
                    id="customerName"
                    value={Values.customerName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {touched.customerName && errors.customerName? <span className="text-red-500 text-xs">{errors.customerName}</span>: null}
                </div>
                <div>
                    <TextField 
                    fullWidth
                    size="small"
                    label="Service Type"
                    placeholder="Enter service type"
                    type="text"
                    value={Values.text}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="serviceType"/>
                     {touched.serviceType && errors.serviceType? <span className="text-red-500 text-xs">{errors.serviceType}</span>: null}
                </div>
                <div>
                    <TextField 
                    fullWidth
                    size="small"
                    InputLabelProps={{shrink:true}}
                    type="date"
                    label="Delivery Date"
                    value={Values.deliveryDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="deliveryDate"/>
                     {touched.deliveryDate && errors.deliveryDate? <span className="text-red-500 text-xs">{errors.deliveryDate}</span>: null}
                </div>
                <div>
                    <TextField 
                    fullWidth
                    size="small"
                    type="number"
                    label="Enter Amount"
                    value={Values.amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="amount"/>
                     {touched.amount && errors.amount? <span className="text-red-500 text-xs">{errors.amount}</span>: null}
                </div>
                <FormControl fullWidth>
                    <InputLabel id="orderStatus-label">Status</InputLabel>
                    <Select 
                    labelId="orderStatus-Label"
                    id="status"
                    size="small"
                    label="Status"
                    name="status"
                    value={Values.status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    >
                        <MenuItem Value="Received">Received</MenuItem>
                        <MenuItem Value="In-progress">In progress</MenuItem>
                        <MenuItem Value="Completed">Completed</MenuItem>
                    </Select>
                    {touched.status && errors.status? <span className="text-red-500 text-xs">{errors.status}</span>: null}
                </FormControl>
                <div>
                    <TextField 
                    fullWidth
                    type="text"
                    multiline
                    rows={2}
                    label="Notes"
                    placeholder="Notes/Comments"
                    value={Values.status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="notes"/>
                     {touched.notes && errors.notes? <span className="text-red-500 text-xs">{errors.notes}</span>: null}
                </div>
                <button type="submit" className="h[40px] w-full rounded-md shaadow-md bg-blue-500 text-white text-xl cursor-pointer">Submit</button>
            </form>
        </main>
    )
}