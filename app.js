const express = require('express');
const path = require('path');
const app = express();
const turnoController = require('../controller/turnoController.js')
app.use(express.static("public"));



app.get('/admin/turnos', turnoController.adminTurnos)

app.get('/listado_turnos', turnoController.listado_turnos)

app.get('/login', (req, res) => {
    return res.sendFile(path.join(__dirname,'/views/login.html'));
})

app.get('/vista_turnos', turnoController.vista_turnos)

app.listen(3000, () => console.log('corriendo'));