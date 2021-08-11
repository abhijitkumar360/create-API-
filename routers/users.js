import express from 'express'
import {getUsers,getUserByID,createUser} from '../controllers/users.js'

const router=express.Router();
router.get("/",getUsers)
router.get("/:id",getUserByID)
router.post("/",createUser)
router.put("/id",getUsers)

export default router