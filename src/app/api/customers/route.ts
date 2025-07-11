import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const customers = await prisma.customer.findMany();
  return NextResponse.json(customers);
}

export async function POST(req: Request) {
  const { name, phone, email } = await req.json();
  const customer = await prisma.customer.create({
    data: { name, phone, email },
  });
  return NextResponse.json(customer, { status: 201 });
}

export async function PUT(req: Request) {
  const { id, name, phone, email } = await req.json();
  const customer = await prisma.customer.update({
    where: { id },
    data: { name, phone, email },
  });
  return NextResponse.json(customer);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.customer.delete({ where: { id } });
  return NextResponse.json({ id });
}
