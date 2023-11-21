// import connection from "@/libs/mongodb";
import connection from "@/libs/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";
console.log("aadish");
export async function GET(req, res) {
  await connection();
  const todo = await Todo.find();
  return NextResponse.json({ todo });
}
export async function POST(req, res) {
  const { title, description } = await req.json();
  await connection();
  await Todo.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}
export async function DELETE(req, res) {
  const id = req.nextUrl.searchParams.get("id");
  await connection();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
