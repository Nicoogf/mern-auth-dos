import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

    jwt.sign({
      id: userSaved._id
    },
      "secret123",
      {
        expiresIn: "1d"
      },
      (err, token) => {
        if (err) console.log(err)
        res.json({ token })
      }
    )

    // res.json({
    //   id: userSaved._id,
    //   username: userSaved.username,
    //   cuentaBancaria: userSaved.cuentaBancaria,
    //   createdAt: userSaved.createdAt,
    //   updateAt: userSaved.updatedAt
    // })

  } catch (error) {
    console.log(error)
  }
}

export const loguin = (req, res) => {
  res.send("Loguin")
}