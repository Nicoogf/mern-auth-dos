import { createAccessToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";



export const register = async (req, res) => {

  //En el req.body van a venir los datos del usuario Registrado
  const { username, password } = req.body;


  //Hash de la contraseña ingresada por el usuario
  const passwordHash = await bcrypt.hash(password, 12)


  try {
    //Se Crea el usuario en base al modelo user
    const newUser = new User({
      username,
      password: passwordHash
    })


    //Se guarda el usuario creado
    const userSaved = await newUser.save()


    //Se crea el token con el id del usuario y se guardaen una cookie
    const token = await createAccessToken({ id: userSaved._id })
    res.cookie("token", token)


    //Respuesta
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      cuentaBancaria: userSaved.cuentaBancaria,
      createdAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const loguin = (req, res) => {
  res.send("Loguin")
}