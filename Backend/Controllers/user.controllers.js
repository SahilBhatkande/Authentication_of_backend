import User from "../models/user.models.js";
import asyncHandler from "express-async-handler";

// User registration handler
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  // Check if the user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Create a new user
  const createUser = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (createUser) {
    res.status(201).json({
      _id: createUser._id,
      name: createUser.name,
      email: createUser.email,
      pic: createUser.pic,
      isAdmin: createUser.isAdmin,
    });
  } else {
    res.status(400).json({ message: "Something went wrong" });
  }
});

// User login handler (to be implemented)
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists and password matches (implement logic)
  const user = await User.findOne({ email });

//   if (user && (await user.matchPassword(password))) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       pic: user.pic,
//     });
//   } else {
//     res.status(401).json({ message: "Invalid email or password" });
//   }
// });


if(user && (await user.matchPassword(password)))
{
        res.json({

            _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                pic: user.pic,

        })

}
else{

    res.status(401).json({message:"Invalid email or password" })
}
});

export { registerUser, loginUser };
