import app from "./app.js";
import { ConnectDB } from "./bd.js";

const PORT_ACTIVE = process.env.PORT || 5000  ;



ConnectDB()
app.listen( PORT_ACTIVE , () => {
    console.log(`Servidor corriendo en puerto ${PORT_ACTIVE}`)
}) ;

