// const db = require('../config/db');
// const bcrypt = require('bcr');

// const Usuario = {
//     create: async (usuario, callback) => {
//         const hashedPassword = await bcrypt.hash(usuario.senha, 10);
//         db.query("INSERT INTO Usuarios (email, senha, cliente_id) VALUES (?, ?, ?)",
//             [usuario.email, hashedPassword, usuario.cliente_id], callback);
//     },
//     findByEmail: (email, callback) => {
//         db.query("SELECT * FROM Usuarios WHERE email = ?", [email], callback);
//     }
// };

// module.exports = Usuario;
