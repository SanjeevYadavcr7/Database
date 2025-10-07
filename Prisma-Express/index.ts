import express from "express";
import { PrismaClient } from "@prisma/client";

const PORT = 8000;
const app = express();
const prisma = new PrismaClient();

app.use(express.json());


app.get('/', (_, res) => {
    res.send('Hello World!');
})

app.get('/users', async (_, res) => {
    const users = await prisma.user.findMany({
        where: { name: { equals: "Harini"} }
    });
    res.status(200).json(users);
});

app.put('/users', async (_, res) => {
    const updateUser = await prisma.user.update({
        where: { email: "sanjeev@example.com"},
        data: {
            name: "Sanjeev Yadav"
        }
    });
    res.status(200).send('User updated successfully.')
});

app.delete('/users', async (_, res) => {
    await prisma.user.delete({
        where: { email: "sanjeev@example.com" }
    });
    res.status(200).send('User deleted successfully.')
});



app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});