import connection from "../connection.js";

async function getAll(params) {
  const {
    instanciaId,
    orderBy,
    escolaId,
    nomeAluno,
    matriculaAluno,
    anoEscolarId,
    situacaoAlunoId,
    anoLetivoId,
    initialRow,
    finalRow,
  } = params;

  const [rows] = await connection.query(
    `SELECT 
      aluno.matricula AS Matricula,
      aluno.id_situacao_aluno,
      aluno.id_cidade,
      aluno.id_instancia,
      aluno.id_censo,
      aluno.nome AS Nome,
      aluno.sexo,
      aluno.data_nascimento,
      aluno.pai_nome,
      aluno.pai_telefone,
      aluno.pai_rg,
      aluno.pai_cpf,
      aluno.mae_nome,
      aluno.mae_telefone,
      aluno.mae_rg,
      aluno.mae_cpf,
      aluno.id_moradia,
      aluno.parentesco_responsavel,
      aluno.responsavel_nome AS Responsavel,
      aluno.responsavel_telefone,
      aluno.responsavel_rg,
      aluno.responsavel_cpf,
      aluno.endereco,
      aluno.bairro,
      aluno.check_alergia,
      aluno.obs_alergia,
      aluno.check_acompanhamento_medico,
      aluno.obs_acompanhamento_medico,
      aluno.check_restricao_atv_fisica,
      aluno.obs_restricao_atv_fisica,
      aluno.check_disturbio,
      aluno.obs_disturbio,
      aluno.instrucoes_disturbio,
      aluno.check_medicacao,
      aluno.obs_medicacao,
      aluno.check_restricao_alimentar,
      aluno.obs_restricao_alimentar,
      aluno.check_direito_imagem,
      aluno.num_sus,
      aluno.num_nis,
      aluno.check_certidao_antiga,
      aluno.certidao_nascimento,
      aluno.data_expedicao_certidao,
      aluno.certidao_cartorio,
      aluno.naturalidade,
      aluno.rg,
      aluno.cpf,
      aluno.check_transporte_escolar,
      aluno.check_pcd,
      aluno.obs_pcd,
      aluno.check_aee,
      aluno.foto,
      ano_escolar.serie AS Serie,
      turma.descricao AS Turma,
      aluno_situacao.descricao AS Situacao,
      ano_letivo.descricao AS Ano,
      escola.nome_fantasia AS Escola
    FROM 
      alunos AS aluno
    INNER JOIN 
      turmas_aluno AS turma_aluno ON aluno.matricula = turma_aluno.aluno_matricula
    INNER JOIN 
      turmas AS turma ON turma_aluno.id_turma = turma.id_turma
    INNER JOIN 
      anos_escolares AS ano_escolar ON turma.id_ano_escolar = ano_escolar.id_ano_escolar
    INNER JOIN 
      anos_letivos AS ano_letivo ON ano_escolar.id_ano_letivo = ano_letivo.id_ano_letivo
    INNER JOIN 
      situacao_aluno AS aluno_situacao ON aluno.id_situacao_aluno = aluno_situacao.id_situacao_aluno
    INNER JOIN
      escolas AS escola ON ano_escolar.id_escola = escola.id_escola
    WHERE 
      (? IS NULL OR ano_escolar.id_escola = ?) AND
      (? IS NULL OR LOWER(aluno.nome) LIKE LOWER(?)) AND
      (? IS NULL OR aluno.matricula = ?) AND
      (? IS NULL OR ano_escolar.id_ano_escolar = ?) AND
      (? IS NULL OR aluno_situacao.id_situacao_aluno = ?) AND
      (? IS NULL OR aluno.id_instancia = ?) AND
      (? IS NULL OR ano_letivo.id_ano_letivo = ?)
    ORDER BY 
      CASE 
        WHEN ? = 'A-Z' THEN aluno.nome 
        WHEN ? = 'insertion_order' THEN aluno.matricula 
        WHEN ? = 'matricula' THEN aluno.matricula 
        ELSE NULL 
      END ASC
    LIMIT ?, ?`,
    [
      escolaId || null,
      escolaId || null,
      nomeAluno ? `%${nomeAluno}%` : null,
      nomeAluno ? `%${nomeAluno}%` : null,
      matriculaAluno || null,
      matriculaAluno || null,
      anoEscolarId || null,
      anoEscolarId || null,
      situacaoAlunoId || null,
      situacaoAlunoId || null,
      instanciaId,
      instanciaId,
      anoLetivoId || null,
      anoLetivoId || null,
      orderBy,
      orderBy,
      orderBy,
      Number(initialRow),
      Number(finalRow),
    ]
  );
  return { rows };
}

async function addStudent(data) {
  const [rows] = await connection.query(
    "INSERT INTO alunos (matricula, id_situacao_aluno, id_cidade, id_instancia, id_censo, nome, sexo, data_nascimento, pai_nome, pai_telefone, pai_rg, pai_cpf, mae_nome, mae_telefone, mae_rg, mae_cpf, id_moradia, parentesco_responsavel, responsavel_nome, responsavel_telefone, responsavel_rg, responsavel_cpf, endereco, bairro, check_alergia, obs_alergia, check_acompanhamento_medico, obs_acompanhamento_medico, check_restricao_atv_fisica, obs_restricao_atv_fisica, check_disturbio, obs_disturbio, instrucoes_disturbio, check_medicacao, obs_medicacao, check_restricao_alimentar, obs_restricao_alimentar, check_direito_imagem, num_sus, num_nis, check_certidao_antiga, certidao_nascimento, data_expedicao_certidao, certidao_cartorio, naturalidade, rg, cpf, check_transporte_escolar, check_pcd, obs_pcd, check_aee, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
      data.check_transporte_escolar || null,
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
