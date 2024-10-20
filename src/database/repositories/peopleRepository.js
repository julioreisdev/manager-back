import connection from "../connection.js";

async function getPeopleById(id) {
  const [rows] = await connection.query(
    "select * from funcionarios where id_funcionario = ?",
    [id]
  );
  return { rows };
}

async function getPeopleByCpf(cpf) {
  const [rows] = await connection.query(
    "select * from funcionarios where cpf = ?",
    [cpf]
  );
  return { rows };
}

async function getPeopleByRg(rg) {
  const [rows] = await connection.query(
    "select * from funcionarios where rg = ?",
    [rg]
  );
  return { rows };
}

async function addPeople(people) {
  await connection.query(
    "INSERT INTO funcionarios (id_escolaridade, nome, sexo, data_nascimento, rg, cpf, foto) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      people.id_escolaridade,
      people.nome,
      people.sexo,
      people.data_nascimento,
      people.rg,
      people.cpf,
      people.foto ? people.foto : null,
    ]
  );
}

const peopleRepository = {
  getPeopleByCpf,
  getPeopleByRg,
  addPeople,
  getPeopleById,
};

export default peopleRepository;
