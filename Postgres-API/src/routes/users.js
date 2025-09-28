import express from 'express';
import UserRepo from '../repos/user-repo.js';

const router = express.Router();

router.get('/users', async (req, res) => {
    const users = await UserRepo.find();
    res.send(users);
})

router.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await UserRepo.findById(id);
    if(!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    return res.send(user);
})


router.post('/users', async (req, res) => {
    const { username, bio } = req.body;
    if(!username || !bio) {
        return res.status(400).send({message: 'Username and bio are required'});
    }

    const user = await UserRepo.insert({username, bio});
    return res.status(201).send(user);
})

router.put('/users/:id', async (req, res) => {

})

router.delete('/users/:id', async (req, res) => {

})

export default router;