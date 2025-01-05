// Definig functionality for user

import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs'

//**********SignUp functionality//************ */
export const signup = async(req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }

        //For Creating  new user on our website
        const hashPassword = await bcryptjs.hash(password,8)
        const createdUser = new User({
            fullname:fullname,
            email: email,
            password: hashPassword,
        })
        await createdUser.save();
        res.status(201).json({ message: "User creted succsessfully",user:{
            id: createdUser.id,
            fullname: createdUser.fullname,
            email: createdUser.email,
        } });
    }
    catch (error) {
        console.log("Error", error.message);
        res.status(500).json({ message: "Internal Server error" });
    }
};

//*********** Login Functionality***********/ 

 export const login = async( req,res)=>{
      try{
          const {email,password} = req.body;
          const user = await User.findOne({email});
        const isMach = await bcryptjs.compare(password,user.password)
        if(!user || !isMach){
            return res.status(400).json({message:"inavlid username and password"});
        }
        else{
            res.status(200).json({message:"Login succsessfull",user:{
                id : user.id,
                fullname: user.fullname,
                email: user.email,
            },
        });
        }
      }

      catch(error){
       console.log("Error" +error.message);
       res.status(500).json({message:"internal server error"});
       
      }
 }