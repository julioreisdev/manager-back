import connection from "../connection.js";

async function getUserById(id) {
  const [rows] = await connection.query(`select * from usuarios where id = ?`, [
    id,
  ]);
  return { rows };
}

async function getAllUsers(usuario) {
  const [rows] = await connection.query(
    `select * from usuarios where usuario = ?`,
    [usuario]
  );
  return { rows };
}

async function getUserInstances(id) {
  const [rows] = await connection.query(
    `select 
    usuarios.id_funcionario, 
    usuarios.id, 
    funcionarios_escolas.tipo, 
    usuarios.usuario, 
    usuarios.status, 
    usuarios.acessos, 
    usuarios.ultimo_acesso, 
    usuarios.senha, 
    escolas.id_instancia,
    instancias.nome 
    from usuarios inner join funcionarios_escolas 
    on usuarios.id_funcionario = funcionarios_escolas.id_funcionario 
    inner join escolas 
    on funcionarios_escolas.id_escola = escolas.id_escola 
    inner join instancias 
    on instancias.id_instancia = escolas.id_instancia 
    where usuarios.id = ?`,
    [id]
  );
  return { rows };
}

async function getUser(usuario) {
  const [rows] = await connection.query(
    `select 
    usuarios.id_funcionario, 
    usuarios.id, 
    funcionarios_escolas.tipo, 
    usuarios.usuario, 
    usuarios.status, 
    usuarios.acessos, 
    usuarios.ultimo_acesso, 
    usuarios.senha, 
    escolas.id_instancia,
    instancias.nome 
    from usuarios inner join funcionarios_escolas 
    on usuarios.id_funcionario = funcionarios_escolas.id_funcionario 
    inner join escolas 
    on funcionarios_escolas.id_escola = escolas.id_escola 
    inner join instancias 
    on instancias.id_instancia = escolas.id_instancia 
    where usuarios.usuario = ?`,
    [usuario]
  );
  return { rows };
}

async function addUser(usuario) {
  const [rows] = await connection.query(
    "INSERT INTO usuarios (id_funcionario, usuario, senha, status, acessos, ultimo_acesso) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      usuario.id_funcionario,
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
  getAllUsers,
  getUserInstances,
  getUserById,
};

export default userRepository;
