
import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup= async (req,res)=>{
    try {
        const {firstname,email,password} = req.body;
        const user =await  User.findOne(req.body);
        if(user) res.status(400).json({message:'User Already Exists'});

        const hashPassword = await bcryptjs.hash(password,10);
        const newUserCreated = new User({
            firstname:firstname,
            email:email,
            password:hashPassword
        })
        await newUserCreated.save();
        res.status(200).json({message:'User Created Succussfully',
            newUserCreated:{
                _id:newUserCreated.id,
                email:newUserCreated.email,
                firstname:newUserCreated.firstname,
            }
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({message:'Internal Server Error'})
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password}= req.body;
        const user = await User.findOne({email});
        const isMatch =await  bcryptjs.compare(password,user.password);
        if( !user || !isMatch){
            res.status(400).json({message:"Invalid email or password"});
        } else {
            res.status(200).json({message:'Login Succussfull',
                user: {
                    _id:user._id,
                    firstname:user.firstname,
                    email:user.email,
                }
            })
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({message:'Internal Server Error'})
    }
}
    