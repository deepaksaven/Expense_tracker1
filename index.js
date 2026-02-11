import express from "express";



const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        success :true,
        message: "Expense Tracker Running"

    });
})
app.listen(4222,()=>{
    console.log("Running on port number 4222");
})

