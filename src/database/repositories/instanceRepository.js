import connection from "../connection.js";

async function getInstances() {
  const [rows] = await connection.query("select * from instancias");
  return { rows };
}

async function getInstanceByCnpj(cnpj) {
  const [rows] = await connection.query(
    "select * from instancias where cnpj = ?",
    [cnpj]
  );
  return { rows };
}

async function addInstance(data) {
  const { id_estado, nome, endereco, bairro, cep, cnpj } = data;
  const [rows] = await connection.query(
    "INSERT INTO instancias (id_estado, nome, endereco, bairro, cep, cnpj) VALUES (?, ?, ?, ?, ?, ?)",
    [id_estado, nome, endereco, bairro, cep, cnpj]
  );
  return { rows };
}

const instanceRepository = {
  getInstances,
  getInstanceByCnpj,
  addInstance,
};

export default instanceRepository;
