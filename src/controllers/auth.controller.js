import registerUser from '../services/auth.service.js'


const register=(req,res)=>{
    const body=req.body;
    const response= registerUser(body);
    res.status(200).json({
        message:'register success',
        data:response
    })

}
const login=(req,res)=>{

}
const me=(req,res)=>{

}
export {register,login,me};
