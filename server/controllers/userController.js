import mongoose from "mongoose"
import UserModel from "../model/userModel.js"
import bcrypt from "bcrypt"

export const getUser = (req, res) => {
    console.log(`the get user route have been requested for`)
    return res.status(200).json({ "message": "this is the user you requested for" })
}

export const createUser = async (req, res) => {
    try{
        console.log("someone attempted to create a new account")
        if(!req.body.firstname || !req.body.lastname || !req.body.country || !req.body.phonenumber || !req.body.password) {
            return res.status(400).json({"message": "all information is required to create an account"})
        }
        const { firstname, lastname, country, phonenumber, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await UserModel.create({ firstname, lastname, country, phonenumber, password: hashedPassword })
        return res.status(201).send(newUser)
    } catch(error) {
        console.log(error)
    }
}