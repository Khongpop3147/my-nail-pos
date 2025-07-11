import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const appointments = await prisma.appointment.findMany({
    include: { customer: true, service: true, staff: true },
  });
  return NextResponse.json(appointments);
}

export async function POST(req: Request) {
  const { customerId, serviceId, staffId, scheduledAt, status } =
    await req.json();
  const appointment = await prisma.appointment.create({
    data: {
      customerId,
      serviceId,
      staffId,
      scheduledAt: new Date(scheduledAt),
      status,
    },
  });
  return NextResponse.json(appointment, { status: 201 });
}

export async function PUT(req: Request) {
  const { id, scheduledAt, status } = await req.json();
  const appointment = await prisma.appointment.update({
    where: { id },
    data: {
      scheduledAt: scheduledAt ? new Date(scheduledAt) : undefined,
      status,
    },
  });
  return NextResponse.json(appointment);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.appointment.delete({ where: { id } });
  return NextResponse.json({ id });
}
