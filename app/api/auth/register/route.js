import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import users from "@/models/users";






export async function POST(req) {
  try {
    await connectDB();
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }


    const userExists = users.find((user) => user.email === email);

  if (userExists) {
    return NextResponse.json(
      { message: "User with this email already exists" },
      { status: 400 }
    );
  }

 const hashpassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now().toString(), // Add a unique ID for the user
    name,
    email,
    password: hashpassword,
  };

  Users.push(newUser);


   const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json(
      { message: "User registered successfully", token },
      { status: 201 }
    );



} catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}