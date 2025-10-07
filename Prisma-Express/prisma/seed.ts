import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async ()  => {
    await prisma.user.createMany({
    data: [
        { 
            name: "Hitler", 
            email: "hailhitler@example.com",
        },
        { 
            name: "Gandhi", 
            email: "imindian@example.com"
        },
        { 
            name: "Mendela", 
            email: "nmendela@example.com"
        }
    ]
    });
}

seed().then(() => {
    prisma.$disconnect();
})