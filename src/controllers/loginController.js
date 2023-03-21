import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user.js";

const secret = "impecable";

const loginController = async (req, res) => {
  // email and password from the body
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials"
      });
    } else {
      // check if password is correct
      const compareHashedPassword = await bcrypt.compare(password, user.password);

      // conditions
      if (!compareHashedPassword) {
        return res.status(400).json(
          { message: 'Invalid Credentials' });
      } else {
        // create and sign JWT token
        //const token = jwt.sign({isAdmin: user.isAdmin}, secret)
        const token = jwt.sign({id: user._id}, secret)
        //, {expiresIn: '1d'}
       

        return res.status(200).json ({
          data: {
            email: user.email,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt
          },
          token: token,
          message: "logged in successfully"

         
        })

        // res.cookie('token', token, {
        //   httpOnly: true,
        //   maxAge: 24 * 60 * 60 * 1000 // 1 day
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }

};

export default loginController;