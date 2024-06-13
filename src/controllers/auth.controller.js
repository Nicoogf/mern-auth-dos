import User from "../models/user.model.js"

export const register = async (req, res) => {

  //En el req.body van a venir los datos del usuario Registrado
  const { username, password } = req.body;

  try {
      //Se Crea el usuario en base al modelo user
      const newUser = new User({
        username,
        password
      })

      //Se guarda el usuario creado
      await newUser.save()
      console.log(newUser)

  } catch (error) {
      console.log(error)
  }
  
  res.send("Registrando")
}

export const loguin = (req, res) => {
  res.send("Loguin")
}