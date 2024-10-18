import connection from "../connection.js";

async function getUser(usuario) {
  const [rows] = await connection.query(
    "select * from usuarios where usuario = ?",
    [usuario]
  );
  return { rows };
}

async function addUser(usuario) {
  const [rows] = await connection.query(
    "INSERT INTO usuarios (id_funcionario, tipo, usuario, senha, status, acessos, ultimo_acesso) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      usuario.id_funcionario,
      usuario.tipo,
      usuario.usuario,
      usuario.senha,
      usuario.status,
      usuario.acessos,
      usuario.ultimo_acesso || null,
    ]
  );
  return { rows };
}

const userRepository = {
  getUser,
  addUser,
};

export default userRepository;
