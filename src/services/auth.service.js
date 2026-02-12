import {pool} from 'pg';
import bycrpt from 'bcrypt';
import jwt from 'jsonwebtoken';

const registerUser=async ({name,email,password})=>{
     //get the details
     const ext_user=await pool.query('SELECT id FROM users WHERE email=$1',[email]);

     //check the if user already exits
     if(ext_user.rows.length>0)
     {
          return "User already exits";
     }

     //hash the password
     const saltRounds=10;

     const new_hashed_password=await bycrpt.hash(password,saltRounds);

     //insert that registered user

     const newUser=await pool.query('INSERT INTO users (name,email,password)  VALUES($1,$2,$3)  RETURNING id, name, email',[name,email,password]);

}
const secret_key=doremon_remanded

const loginUser=async({email,password})=>
{
     //get the details
      const ext_user=await pool.query('SELECT id FROM users WHERE email=$1',[email]);

      if(ext_user.rows.length===0)
      {
          return "User doesn't Exist";
      }
      const user=ext_user.row[0];
      const isMatch=await bycrpt.compare(password,user.password);
      if(!isMatch)
      {
          return "Incorrect password"
      }

       //generate token
       const token=jwt.sign({id: user.id,email: user.email},secret_key,{expiresIn: '3m'});
        
       return{
          message:"Login successful",
         token
       };
     }

     const meUser=async({id})=>{
           const ext_user=await pool.query("SELECT id FROM WHERE id=$1",[id]);
           if(ext_user.rows.length===0)
           {
                return "User doesn't Exist";
           }
           const user=ext_user.rows[0];
         return user;
     }
     export {registerUser,loginUser,meUser};