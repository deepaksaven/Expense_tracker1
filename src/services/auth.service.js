import {pool} from 'pg';
import bycrpt from 'bcrypt';


const registerUser=async ({name,email,password})=>{
     //get the details
     const ext_user=await pool.query('SELECT id FROM users WHERE email=$1'[email]);

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
