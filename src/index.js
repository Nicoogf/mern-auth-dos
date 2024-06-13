import morgan from "morgan";
import app from "./app.js";

const PORT_ACTIVE = process.env.PORT || 5000  ;

app.use(morgan("dev")) ;

app.listen( PORT_ACTIVE , () => {
    console.log(`Servidor corriendo en puerto ${PORT_ACTIVE}`)
}) ;

