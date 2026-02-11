import express from "express";
import authRoutes from './routes/auth.route.js';
const app=express();
app.use(express.json());

app.use('/api',authRoutes);
app.get("/",(req,res)=>{
    res.status(200).json({
        success :true,
        message: "Expense Tracker Running"

    });
})

export default app;

