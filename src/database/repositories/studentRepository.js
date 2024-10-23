import connection from "../connection.js";

async function getAll() {
  const [rows] = await connection.query("select * from alunos");
  return { rows };
}

async function addStudent(data) {
  const [rows] = await connection.query(
    "INSERT INTO alunos (matricula, id_situacao_aluno, id_cidade, id_instancia, id_censo, nome, sexo, data_nascimento, pai_nome, pai_telefone, pai_rg, pai_cpf, mae_nome, mae_telefone, mae_rg, mae_cpf, id_moradia, parentesco_responsavel, responsavel_nome, responsavel_telefone, responsavel_rg, responsavel_cpf, endereco, bairro, check_alergia, obs_alergia, check_acompanhamento_medico, obs_acompanhamento_medico, check_restricao_atv_fisica, obs_restricao_atv_fisica, check_disturbio, obs_disturbio, instrucoes_disturbio, check_medicacao, obs_medicacao, check_restricao_alimentar, obs_restricao_alimentar, check_direito_imagem, num_sus, num_nis, check_certidao_antiga, certidao_nascimento, data_expedicao_certidao, certidao_cartorio, naturalidade, rg, cpf, check_trasnporte_escolar, check_pcd, obs_pcd, check_aee, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      data.matricula,
      data.id_situacao_aluno,
      data.id_cidade,
      data.id_instancia,
      data.id_censo || null,
      data.nome,
      data.sexo,
      data.data_nascimento,
      data.pai_nome || null,
      data.pai_telefone || null,
      data.pai_rg || null,
      data.pai_cpf || null,
      data.mae_nome || null,
      data.mae_telefone || null,
      data.mae_rg || null,
      data.mae_cpf || null,
      data.id_moradia,
      data.parentesco_responsavel,
      data.responsavel_nome,
      data.responsavel_telefone || null,
      data.responsavel_rg || null,
      data.responsavel_cpf || null,
      data.endereco || null,
      data.bairro || null,
      data.check_alergia || null,
      data.obs_alergia || null,
      data.check_acompanhamento_medico || null,
      data.obs_acompanhamento_medico || null,
      data.check_restricao_atv_fisica || null,
      data.obs_restricao_atv_fisica || null,
      data.check_disturbio || null,
      data.obs_disturbio || null,
      data.instrucoes_disturbio || null,
      data.check_medicacao || null,
      data.obs_medicacao || null,
      data.check_restricao_alimentar || null,
      data.obs_restricao_alimentar || null,
      data.check_direito_imagem || null,
      data.num_sus || null,
      data.num_nis || null,
      data.check_certidao_antiga || null,
      data.certidao_nascimento || null,
      data.data_expedicao_certidao || null,
      data.certidao_cartorio || null,
      data.naturalidade || null,
      data.rg || null,
      data.cpf || null,
      data.check_trasnporte_escolar || null,
      data.check_pcd || null,
      data.obs_pcd || null,
      data.check_aee || null,
      data.foto || null,
    ]
  );
  return { rows };
}

async function getStudent(data) {
  const [rows] = await connection.query(
    "select * from alunos where id_instancia = ? and nome = ? and data_nascimento = ? and (responsavel_nome = ? or mae_nome = ? or cpf = ?)",
    [
      data.id_instancia,
      data.nome,
      data.data_nascimento,
      data.responsavel_nome,
      data.mae_nome,
      data.cpf,
    ]
  );
  return { rows };
}

const studentRepository = {
  getAll,
  addStudent,
  getStudent,
};

export default studentRepository;
