import connection from "@/libs/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";
export async function PUT(req, res) {

    const {title,description,id } = await req.json();
    await connection();
    await Todo.findByIdAndUpdate(id,{ title, description });
    return NextResponse.json({ message: "Topic Updated" }, { status: 201 });
  }
  export async function GET(req, res,{params}) {
    const {id}=params
    console.log(id);
    await connection();
    const todo=await Todo.findOne({_id:id});
    return NextResponse.json({todo},{ status: 201 });
  }