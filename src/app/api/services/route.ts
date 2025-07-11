import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const services = await prisma.service.findMany();
  return NextResponse.json(services);
}

export async function POST(req: Request) {
  const { name, price, duration } = await req.json();
  const service = await prisma.service.create({
    data: { name, price, duration },
  });
  return NextResponse.json(service, { status: 201 });
}

export async function PUT(req: Request) {
  const { id, name, price, duration } = await req.json();
  const service = await prisma.service.update({
    where: { id },
    data: { name, price, duration },
  });
  return NextResponse.json(service);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.service.delete({ where: { id } });
  return NextResponse.json({ id });
}
