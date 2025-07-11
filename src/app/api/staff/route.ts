import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const staff = await prisma.staff.findMany();
  return NextResponse.json(staff);
}

export async function POST(req: Request) {
  const { name, role } = await req.json();
  const member = await prisma.staff.create({
    data: { name, role },
  });
  return NextResponse.json(member, { status: 201 });
}

export async function PUT(req: Request) {
  const { id, name, role } = await req.json();
  const member = await prisma.staff.update({
    where: { id },
    data: { name, role },
  });
  return NextResponse.json(member);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.staff.delete({ where: { id } });
  return NextResponse.json({ id });
}
