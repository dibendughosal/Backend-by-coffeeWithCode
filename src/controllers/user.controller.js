const User = require('../models/user.model.js');
const asyncHandler = require('../utils/asyncHandler.js');
const ApiError = require('../utils/ApiError.js');
const registerUser = asyncHandler( async (req,res) => {
    res.status(200).json({
        message: "Made with ❤ by Dibendu Ghosal"
    })

    const {username, fullName, email, password} = req.body;
    // console.log(fullName, email, password);

    if([fullName,email,password,username].some((fields) => fields?.trim() === "")){
        throw new ApiError(402, "All Fields are required.")
    }

    const existedUser = User.findOne({
        $or: [{ username }, { email }]
    })

    if(existedUser){
        throw new ApiError(404, "User existed!") 
    }
})
module.exports = registerUser;