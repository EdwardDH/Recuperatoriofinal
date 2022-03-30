const express = require('express');
const path = require('path');
const app = express();
app.use(express.static("public"));

app.get('/admin/turnos', (req, res) => {
    return res.sendFile(path.join(__dirname,'/views/home.html'));
})

app.get('/Listado de turnos', (req, res) => {
    return res.sendFile(path.join(__dirname,'/views/Listado de turnos.html'));
})

app.get('/Login', (req, res) => {
    return res.sendFile(path.join(__dirname,'/views/Login.html'));
})

app.get('/Vista de turnos', (req, res) => {
    return res.sendFile(path.join(__dirname,'/views/Vista de turnos.html'));
})

app.listen(3000, () => console.log('corriendo'));