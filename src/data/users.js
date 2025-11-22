const Users = [
    {
        Id_usuario: 1,
        es_streamer: true,
        name: "JuanPerez",
        avatarURL: "https://ejemplo.com/avatar1.png",
        saldoMonedas: 500,
        puntos: 1200,
        nivel: 5,
        horas_live: 40,
        id_seguidos: [2,3]
    },
    {
        Id_usuario: 2,
        es_streamer: false,
        name: "MariaGamer",
        avatarURL: "https://ejemplo.com/avatar2.png",
        saldoMonedas: 300,
        puntos: 750,
        nivel: 3,
        horas_live: 0,
        id_seguidos: [1,3]
    },
    {
        Id_usuario: 3,
        es_streamer: true,
        name: "StreamerX",
        avatarURL: "https://ejemplo.com/avatar3.png",
        saldoMonedas: 1500,
        puntos: 3500,
        nivel: 8,
        horas_live: 120,
        id_seguidos: [1,2]
    }
];

export default Users;
