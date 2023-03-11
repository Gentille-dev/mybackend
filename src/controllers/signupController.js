import bcrypt from 'bcrypt';
import User from '../model/user.js';
import errorFunc from '../utils/errorFunc.js';

const signupController = async (req, res) => {
  const { fullname, email, password, isAdmin} = req.body;
  try {
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create our new user
    const newUser = await User.create({ fullname, email, password: hashedPassword, isAdmin});
    res.status(201).json({
      message: "New User created successfully",
      data: newUser
    });
  } catch (error) {
    console.log(error.code)
    if(error.code === 11000){
      return res.status(403).json({
        message: "email already exists"
      })
    }

    const messageContent = error.message;
    const status = 500;
    errorFunc(res, messageContent, status);
  }
};

export default signupController;