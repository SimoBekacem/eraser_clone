import prisma from "@/lib/db";

export async function getUserById(userId: string) {
  return await prisma.user.findUnique({
    include: {
      teams: true,
    },
    where: {
      id: userId,
    },
  });
}

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    include: {
      teams: true,
    },
    where: {
      email,
    },
  });
}

export async function getUserTeams(userEmail: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
    include: {
      teams: true,
    },
  });
  if (!user) {
    return [];
  }
  return user.teams;
}
