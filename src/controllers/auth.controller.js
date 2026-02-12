import registerUser from '../services/auth.service.js';
import loginUser from '../services/auth.service.js';

const register=(req,res)=>{
    const body=req.body;
    const response= registerUser(body);
    res.status(200).json({
        message:'register success',
        data:response
    })

}
const login=(req,res)=>{
     const body =req.body;
    const response= loginUser(body);
    res.status(200).json({
        message:'Login Successfull',
        data:response
    })
}
const me=(req,res)=>{
       const body =req.body;
    const response= meUser(body);
    res.status(200).json({
        data:response
    })
}
export {register,login,me};

//here we process body and send to services
