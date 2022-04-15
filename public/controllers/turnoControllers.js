const turnoControllers = {
    listado_turnos: (req, res) => {
        return res.sendFile(path.join(__dirname,'/views/listado_turnos.html'));
    },
    adminTurnos: (req, res) => {
        return res.sendFile(path.join(__dirname,'/views/admin/turnos.html'));
    },
    vista_turnos: (req, res) => {
        return res.sendFile(path.join(__dirname,'/views/vista_turnos.html'));
    }

};

module.exports = turnosControllers;

