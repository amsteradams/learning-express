import express from 'express'
import Room from '../models/roomModels.js';
const router = express.Router();
export const getTest = router.get('/test', (_, res)=>{
    res.send(
        {name:'hardcoders'}
    )
})

export const postTest = (req, res)=> {
    console.log(req)
    res.send(req.body)
}

export const addRoom = async (req, res) => {
    const room = new Room(req.body)
        await room.save()
        res.send(room)
}

export const getRooms = async (req, res) => {
    const rooms = await Room.find({})
    res.send(rooms)
}

export const getRoom = async (req, res) => {
    const room = await Room.find({_id: req.params.id})
    res.send(room)
}

export const patchRoom = async (req, res) => {
    const id =req.params.id
    const room = await Room.findByIdAndUpdate(req.params.id, req.body)
    await room.save()
    res.send(room)
}

export const deleteRoom = async(req, res) => {
    const room = await Room.findByIdAndDelete(req.params.id)
    if(!room){
        res.status(404).send('Aucune chambre trouvée')
    }
    res.status(200).send()
}