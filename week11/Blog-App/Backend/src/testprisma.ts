import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testQuery() {
  const user = await prisma.user.findFirst();
  console.log(user);
}

testQuery().catch((e) => {
  throw e;
}).finally(async () => {
  await prisma.$disconnect();
});
