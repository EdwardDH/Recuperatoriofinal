const express = require('express');
const path = require('path');
const app = express();
const turnoController = require('./controller/turnoController.js')
app.use(express.static("public"));



app.get('/admin/turnos', turnoController.adminTurnos)

app.get('/listadoTurnos', turnoController.listadoTurnos)

app.get('/login', (req, res) => {
    return res.sendFile(path.join(__dirname,'/views/login.html'));
})

app.get('/vistaTurnos', turnoController.vistaTurnos)

app.listen(3000, () => console.log('corriendo'));