const path = require('path')

const turnoController = {
    listadoTurnos: (req, res) => {
        return res.sendFile(path.join(__dirname,'../views/listadoTurnos.html'));
    },
    adminTurnos: (req, res) => {
        return res.sendFile(path.join(__dirname,'../views/admin/turnos.html'));
    },
    vistaTurnos: (req, res) => {
        return res.sendFile(path.join(__dirname,'../views/vistaTurnos.html'));
    }

};

module.exports = turnoController;

