import express from 'express'
import { catchErrors } from '../utils.js'
import { getTest, postTest, addRoom, getRooms, getRoom, patchRoom, deleteRoom } from '../controllers/roomControllers.js'
const router = express.Router()

router.get('/', (_, res)=>{
    res.send('Home')
})

router.get('/test', getTest)

router.post('/test', postTest)

router.post('/rooms', catchErrors(addRoom))

router.get('/rooms', catchErrors(getRooms))

router.get('/room/:id', catchErrors(getRoom))

router.patch('/room/:id', catchErrors(patchRoom))

router.delete('/room/:id', catchErrors(deleteRoom))

export default router