console.log("Welcome to Backend!");
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

const app=express(); //Use app 
app.use(cors());
app.use(express.json());
require('dotenv').config();
console.log(process.env.MONGO_URI);
app.get('/', (req,res)=>{
    res.send('Welcome to backend');
})
app.get('/login', (req, res)=>{
    res.send("Welcome to login page!");
})
//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Connected to Mongo DB!")).catch((err)=>console.log(err));


//User schema
const UserSchema=new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profilePicture: { type: String, default: "" }, // URL or file path
    bio: { type: String, default: "" }
});

// verify token 
const verifyToken=(req, res, next)=>{
    const token=req.headers.authorization;
    if(!token){
        return res.status(401).json({message:"No token fonud"})
    }
    const tokenParts = token.split(' ');
    try{
        const JWT_SECRET=process.env.JWT_SECRET;
        const decoded=jwt.verify(tokenParts[1], JWT_SECRET);
        req.userId=decoded.userId;
        next();
    }
    catch{
        res.status(403).json({message:"Invalid Token"});
    }
}
const User=mongoose.model("User", UserSchema);

//Get signup request
app.post('/sign-up', async (req, res)=>{
    try{
        const {name, username, email, password}=req.body;

        //Check if user exists
        const existingUser=await User.findOne({username});
        if(existingUser){ return res.status(400).json({message: "User already exists!", success:false})};

        //Hash password
        const hashedPassword=await bcrypt.hash(password, 10);

        //Create new User
        const newUser=new User({name, username, email, password:hashedPassword});
        await newUser.save();
        res.json({message:"User registered successfully", success:true});
    }
    catch(error){
        res.status(500).json({message: "Sign up failed", success:false})
    }
})

//Login
app.post('/login', async (req,res)=>{
    try{
        const {username, password}=req.body;

        //Check if user exists
        const user=await User.findOne({username});
        if(!user) return res.status(400).json({messgae:"User doesn't exist"});

        //Validate passord
        const isMatch=await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message:"Invalid credentials"});

        //Send JWT
        const JWT_SECRET = process.env.JWT_SECRET;
        const token=jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn:"1m"});
        res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
    }
    catch(error){
        res.json({message: error});
    }
})

//Update Profile Data

app.put('/update-profile', verifyToken, async (req,res)=>{
    try{
        const {userId, profilePicture, bio}=req.body;
        const updatedUser=await User.findByIdAndUpdate(userId, {profilePicture, bio}, {new: true});

        res.json({message: "Profile Updated successfully", user: updatedUser});
    }
    catch(error){
        res.status(500).json({message: "Error updating profile"})
    }
})


// Get profile data
app.post('/get-profile', verifyToken, async(req, res)=>{
    try{
        const {userId}=req.body;
        const user=await User.findById(userId);
        res.json({message:"Profile fetched successfully", user: user})
    }
    catch(error){
        res.status(500).json({message:"Profile cannot be fetched!"});
    }
})



//Start server
const PORT=process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`App is running at https://localhost:${PORT}`);
})


