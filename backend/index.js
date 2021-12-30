const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const { Client } = require("pg");
if (process.env.ENV !== "production") {
    require("dotenv").config();
}
const { resolve } = require("path");
const { config } = require("dotenv");
config({ path: resolve(__dirname, "./.env") });

const authRouter = require("./routes/auth");
const app = express();
const { verifyToken } = require("./middlewares/jwt-validate");

const port = 3000;

app.use(express.static(path.join("public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRouter);


app.get("/", (req, res,) => {
    res.sendFile(path.join(__dirname + "/Login"));
});

app.get("/Home", (req, res) => {
    res.sendFile(path.join(__dirname + "/Home"));
});

app.get("/Catalogo", (req, res) => {
    res.sendFile(path.join(__dirname + "/Catalogo"));
});

app.get("/Dancefit", (req, res) => {
    res.sendFile(path.join(__dirname + "/Dancefit"));
});

app.get("/Funcional", (req, res) => {
    res.sendFile(path.join(__dirname + "/Funcional"));
});

app.get("/Spinning", (req, res) => {
    res.sendFile(path.join(__dirname + "/Spinning"));
});

app.get("/Gap", (req, res) => {
    res.sendFile(path.join(__dirname + "/Gap"));
});

app.get("/Olvidastelacontra", (req, res) => {
    res.sendFile(path.join(__dirname + "/Olvidastelacontra"));
});

app.get("/Abonar", (req, res) => {
    res.sendFile(path.join(__dirname + "/Abonar"));
});

app.get("/Registro", (req, res) => {
    res.sendFile(path.join(__dirname + "/Registro"));
});

app.get("/test", async (request, response) => {
    const client = new Client();
    client.connect();

    client.query("SELECT $1::text as message", ["Hola Mundo!"], (err, res) => {
        if (err) {
            console.error(err.stack);
            response.send("Error: " + err.stack);
        } else {
            console.log(res.rows[0].message);
            response.send(res.rows[0].message);
        }
        client.end();
    });
});

app.listen(port, () => {
    console.log(`Corriendo en el http://localhost:${port}/index`);
});
