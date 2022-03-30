const express = require('express');
const path = require('path');
const app = express();
app.use(express.static("public"));

app.get('/admin/turnos', (req, res) => {
    return res.sendFile(path.join(__dirname,'/views/admin/turnos.html'));
})

app.get('/listado_turnos', (req, res) => {
    return res.sendFile(path.join(__dirname,'/views/listado_turnos.html'));
})

app.get('/login', (req, res) => {
    return res.sendFile(path.join(__dirname,'/views/login.html'));
})

app.get('/vista_turnos', (req, res) => {
    return res.sendFile(path.join(__dirname,'/views/vista_turnos.html'));
})

app.listen(3000, () => console.log('corriendo'));