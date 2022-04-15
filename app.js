const express = require('express');
const path = require('path');
const app = express();
const turnoControllers = require('./controllers/turnoControllers.js')
app.use(express.static("public"));



app.get('/admin/turnos', turnoControllers.adminTurnos)

app.get('/listado_turnos', turnoControllers.listado_turnos)

app.get('/login', (req, res) => {
    return res.sendFile(path.join(__dirname,'/views/login.html'));
})

app.get('/vista_turnos', turnoControllers.vista_turnos)

app.listen(3000, () => console.log('corriendo'));