import users from "../models/auth1.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existinguser = await users.findOne({ email });

    if (password.length < 6) {
      res.status(406).send("Password should atleast 6 characters long");
      return;
    }
    if (existinguser) {
      res.status(404).send("User with this Email already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,
    });

    newUser.save();
    const token = jwt.sign(
      { email: email},
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({ result: newUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong...");
  }
};
