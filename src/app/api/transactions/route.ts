import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const transactions = await prisma.transaction.findMany({
    include: {
      appointment: { include: { customer: true, service: true, staff: true } },
    },
  });
  return NextResponse.json(transactions);
}

export async function POST(req: Request) {
  const { appointmentId, totalAmount, paymentMethod } = await req.json();
  const tx = await prisma.transaction.create({
    data: { appointmentId, totalAmount, paymentMethod },
  });
  return NextResponse.json(tx, { status: 201 });
}

export async function PUT(req: Request) {
  const { id, totalAmount, paymentMethod } = await req.json();
  const tx = await prisma.transaction.update({
    where: { id },
    data: { totalAmount, paymentMethod },
  });
  return NextResponse.json(tx);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.transaction.delete({ where: { id } });
  return NextResponse.json({ id });
}
