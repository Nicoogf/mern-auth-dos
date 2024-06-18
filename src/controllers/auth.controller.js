import { createAccessToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";



export const register = async (req, res) => {



  //En el req.body van a venir los datos del usuario Registrado
  const { username, password } = req.body;

  try {

    const userFound = await User.findOne({username})
    if(userFound) return res.status(400).json(["El nombre de usuario ya esta en uso"])


    //Hash de la contraseña ingresada por el usuario
    const passwordHash = await bcrypt.hash(password, 12)

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


export const loguin = async (req, res) => {

  //En el req.body van a venir los datos del usuario Registrado
  const { username, password } = req.body;

  try {

    //Se Busca al Usuario si existe por su Username
    const userFound = await User.findOne({ username })

    if (!userFound) {
      return res.status(400).json({ message: "Usuario no encontrado" })
    }

    //Compara contraseña ingresada por el usuario con la guardada en la BD
    const isMatch = await bcrypt.compare(password, userFound.password)

    if (!isMatch) {
      return res.status(400).json({ message: "Credenciales incorrectas" })
    }


    //Se crea el token con el id del usuario y se guardaen una cookie
    const token = await createAccessToken({ id: userFound._id })
    res.cookie("token", token)

    //Respuesta
    res.json({
      id: userFound._id,
      username: userFound.username,
      cuentaBancaria: userFound.cuentaBancaria,
      createdAt: userFound.createdAt,
      updateAt: userFound.updatedAt
    })


  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


export const logout = ( req ,res ) => {
  res.cookie("token" , "" , {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

export const profile = async (req, res)=> {
 const userFound = await User.findById(req.user.id)
 if(!userFound) return res.status(400).json({message :"Usuario no encontrado"})
 res.json({
    id:userFound._id,
    username: userFound.username,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
    cuentaBancaria: userFound.cuentaBancaria
  })
}