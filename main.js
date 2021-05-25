import axios from "axios";
import { crearMailSender } from "./Mail_sender.js";
import { crearServidor } from "./servidor.js";


const transporter = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    user: "example@gmail.com",
    pass: "passexample"
}

const sender = await crearMailSender(transporter)

async function main(){
    const servidor = await crearServidor({sender: sender, port: 3000})

    /* await axios.post('http://localhost:3000/enviarMail', 
    {destinatario: "dianaagustinaf@gmail.com, nicolashzap@gmail.com, weitube.lee@gmail.com", 
    subject: "Server Prueba", 
    text:"Si esto llega funciona"}) */
}

main()

