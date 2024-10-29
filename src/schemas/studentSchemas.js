import Joi from "joi";

const add = Joi.object({
  id_situacao_aluno: Joi.number().required().messages({
    "number.base": "O campo 'id_situacao_aluno' deve ser um número.",
    "any.required": "O campo 'id_situacao_aluno' é obrigatório.",
  }),
  id_cidade: Joi.number().required().messages({
    "number.base": "O campo 'id_cidade' deve ser um número.",
    "any.required": "O campo 'id_cidade' é obrigatório.",
  }),
  id_instancia: Joi.number().required().messages({
    "number.base": "O campo 'id_instancia' deve ser um número.",
    "any.required": "O campo 'id_instancia' é obrigatório.",
  }),
  id_censo: Joi.number().optional().messages({
    "number.base": "O campo 'id_censo' deve ser um número.",
  }),
  nome: Joi.string().required().messages({
    "string.base": "O campo 'nome' deve ser uma string.",
    "any.required": "O campo 'nome' é obrigatório.",
  }),
  sexo: Joi.string().required().messages({
    "string.base": "O campo 'sexo' deve ser uma string.",
    "any.required": "O campo 'sexo' é obrigatório.",
  }),
  data_nascimento: Joi.date().required().messages({
    "date.base": "O campo 'data_nascimento' deve ser uma data válida.",
    "any.required": "O campo 'data_nascimento' é obrigatório.",
  }),
  pai_nome: Joi.string().optional().messages({
    "string.base": "O campo 'pai_nome' deve ser uma string.",
  }),
  pai_telefone: Joi.string().optional().messages({
    "string.base": "O campo 'pai_telefone' deve ser uma string.",
  }),
  pai_rg: Joi.string().optional().messages({
    "string.base": "O campo 'pai_rg' deve ser uma string.",
  }),
  pai_cpf: Joi.string().optional().messages({
    "string.base": "O campo 'pai_cpf' deve ser uma string.",
  }),
  mae_nome: Joi.string().optional().messages({
    "string.base": "O campo 'mae_nome' deve ser uma string.",
  }),
  mae_telefone: Joi.string().optional().messages({
    "string.base": "O campo 'mae_telefone' deve ser uma string.",
  }),
  mae_rg: Joi.string().optional().messages({
    "string.base": "O campo 'mae_rg' deve ser uma string.",
  }),
  mae_cpf: Joi.string().optional().messages({
    "string.base": "O campo 'mae_cpf' deve ser uma string.",
  }),
  id_moradia: Joi.number().required().messages({
    "number.base": "O campo 'id_moradia' deve ser um número.",
    "any.required": "O campo 'id_moradia' é obrigatório.",
  }),
  parentesco_responsavel: Joi.string().required().messages({
    "string.base": "O campo 'parentesco_responsavel' deve ser uma string.",
    "any.required": "O campo 'parentesco_responsavel' é obrigatório.",
  }),
  responsavel_nome: Joi.string().required().messages({
    "string.base": "O campo 'responsavel_nome' deve ser uma string.",
    "any.required": "O campo 'responsavel_nome' é obrigatório.",
  }),
  responsavel_telefone: Joi.string().optional().messages({
    "string.base": "O campo 'responsavel_telefone' deve ser uma string.",
  }),
  responsavel_rg: Joi.string().optional().messages({
    "string.base": "O campo 'responsavel_rg' deve ser uma string.",
  }),
  responsavel_cpf: Joi.string().optional().messages({
    "string.base": "O campo 'responsavel_cpf' deve ser uma string.",
  }),
  endereco: Joi.string().optional().messages({
    "string.base": "O campo 'endereco' deve ser uma string.",
  }),
  bairro: Joi.string().optional().messages({
    "string.base": "O campo 'bairro' deve ser uma string.",
  }),
  check_alergia: Joi.number().integer().min(0).max(1).optional().messages({
    "number.base": "O campo 'check_alergia' deve ser um número.",
    "number.integer": "O campo 'check_alergia' deve ser um inteiro.",
    "number.min": "O campo 'check_alergia' deve ser 0 ou 1.",
    "number.max": "O campo 'check_alergia' deve ser 0 ou 1.",
  }),
  obs_alergia: Joi.string().optional().messages({
    "string.base": "O campo 'obs_alergia' deve ser uma string.",
  }),
  check_acompanhamento_medico: Joi.number()
    .integer()
    .min(0)
    .max(1)
    .optional()
    .messages({
      "number.base":
        "O campo 'check_acompanhamento_medico' deve ser um número.",
      "number.integer":
        "O campo 'check_acompanhamento_medico' deve ser um inteiro.",
      "number.min": "O campo 'check_acompanhamento_medico' deve ser 0 ou 1.",
      "number.max": "O campo 'check_acompanhamento_medico' deve ser 0 ou 1.",
    }),
  obs_acompanhamento_medico: Joi.string().optional().messages({
    "string.base": "O campo 'obs_acompanhamento_medico' deve ser uma string.",
  }),
  check_restricao_atv_fisica: Joi.number()
    .integer()
    .min(0)
    .max(1)
    .optional()
    .messages({
      "number.base": "O campo 'check_restricao_atv_fisica' deve ser um número.",
      "number.integer":
        "O campo 'check_restricao_atv_fisica' deve ser um inteiro.",
      "number.min": "O campo 'check_restricao_atv_fisica' deve ser 0 ou 1.",
      "number.max": "O campo 'check_restricao_atv_fisica' deve ser 0 ou 1.",
    }),
  obs_restricao_atv_fisica: Joi.string().optional().messages({
    "string.base": "O campo 'obs_restricao_atv_fisica' deve ser uma string.",
  }),
  check_disturbio: Joi.number().integer().min(0).max(1).optional().messages({
    "number.base": "O campo 'check_disturbio' deve ser um número.",
    "number.integer": "O campo 'check_disturbio' deve ser um inteiro.",
    "number.min": "O campo 'check_disturbio' deve ser 0 ou 1.",
    "number.max": "O campo 'check_disturbio' deve ser 0 ou 1.",
  }),
  obs_disturbio: Joi.string().optional().messages({
    "string.base": "O campo 'obs_disturbio' deve ser uma string.",
  }),
  instrucoes_disturbio: Joi.string().optional().messages({
    "string.base": "O campo 'instrucoes_disturbio' deve ser uma string.",
  }),
  check_medicacao: Joi.number().integer().min(0).max(1).optional().messages({
    "number.base": "O campo 'check_medicacao' deve ser um número.",
    "number.integer": "O campo 'check_medicacao' deve ser um inteiro.",
    "number.min": "O campo 'check_medicacao' deve ser 0 ou 1.",
    "number.max": "O campo 'check_medicacao' deve ser 0 ou 1.",
  }),
  obs_medicacao: Joi.string().optional().messages({
    "string.base": "O campo 'obs_medicacao' deve ser uma string.",
  }),
  check_restricao_alimentar: Joi.number()
    .integer()
    .min(0)
    .max(1)
    .optional()
    .messages({
      "number.base": "O campo 'check_restricao_alimentar' deve ser um número.",
      "number.integer":
        "O campo 'check_restricao_alimentar' deve ser um inteiro.",
      "number.min": "O campo 'check_restricao_alimentar' deve ser 0 ou 1.",
      "number.max": "O campo 'check_restricao_alimentar' deve ser 0 ou 1.",
    }),
  obs_restricao_alimentar: Joi.string().optional().messages({
    "string.base": "O campo 'obs_restricao_alimentar' deve ser uma string.",
  }),
  check_direito_imagem: Joi.number()
    .integer()
    .min(0)
    .max(1)
    .optional()
    .messages({
      "number.base": "O campo 'check_direito_imagem' deve ser um número.",
      "number.integer": "O campo 'check_direito_imagem' deve ser um inteiro.",
      "number.min": "O campo 'check_direito_imagem' deve ser 0 ou 1.",
      "number.max": "O campo 'check_direito_imagem' deve ser 0 ou 1.",
    }),
  num_sus: Joi.string().optional().messages({
    "string.base": "O campo 'num_sus' deve ser uma string.",
  }),
  num_nis: Joi.string().optional().messages({
    "string.base": "O campo 'num_nis' deve ser uma string.",
  }),
  check_certidao_antiga: Joi.number()
    .integer()
    .min(0)
    .max(1)
    .optional()
    .messages({
      "number.base": "O campo 'check_certidao_antiga' deve ser um número.",
      "number.integer": "O campo 'check_certidao_antiga' deve ser um inteiro.",
      "number.min": "O campo 'check_certidao_antiga' deve ser 0 ou 1.",
      "number.max": "O campo 'check_certidao_antiga' deve ser 0 ou 1.",
    }),
  certidao_nascimento: Joi.string().optional().messages({
    "string.base": "O campo 'certidao_nascimento' deve ser uma string.",
  }),
  data_expedicao_certidao: Joi.date().optional().messages({
    "date.base": "O campo 'data_expedicao_certidao' deve ser uma data válida.",
  }),
  certidao_cartorio: Joi.string().optional().messages({
    "string.base": "O campo 'certidao_cartorio' deve ser uma string.",
  }),
  naturalidade: Joi.string().optional().messages({
    "string.base": "O campo 'naturalidade' deve ser uma string.",
  }),
  rg: Joi.string().optional().messages({
    "string.base": "O campo 'rg' deve ser uma string.",
  }),
  cpf: Joi.string().optional().messages({
    "string.base": "O campo 'cpf' deve ser uma string.",
  }),
  check_transporte_escolar: Joi.number()
    .integer()
    .min(0)
    .max(1)
    .optional()
    .messages({
      "number.base": "O campo 'check_transporte_escolar' deve ser um número.",
      "number.integer":
        "O campo 'check_transporte_escolar' deve ser um inteiro.",
      "number.min": "O campo 'check_transporte_escolar' deve ser 0 ou 1.",
      "number.max": "O campo 'check_transporte_escolar' deve ser 0 ou 1.",
    }),
  check_pcd: Joi.number().integer().min(0).max(1).optional().messages({
    "number.base": "O campo 'check_pcd' deve ser um número.",
    "number.integer": "O campo 'check_pcd' deve ser um inteiro.",
    "number.min": "O campo 'check_pcd' deve ser 0 ou 1.",
    "number.max": "O campo 'check_pcd' deve ser 0 ou 1.",
  }),
  obs_pcd: Joi.string().optional().messages({
    "string.base": "O campo 'obs_pcd' deve ser uma string.",
  }),
  check_aee: Joi.number().integer().min(0).max(1).optional().messages({
    "number.base": "O campo 'check_aee' deve ser um número.",
    "number.integer": "O campo 'check_aee' deve ser um inteiro.",
    "number.min": "O campo 'check_aee' deve ser 0 ou 1.",
    "number.max": "O campo 'check_aee' deve ser 0 ou 1.",
  }),
  foto: Joi.string().optional().messages({
    "string.base": "O campo 'foto' deve ser uma string.",
  }),
});

const studentSchemas = {
  add,
};

export default studentSchemas;
