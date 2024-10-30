import Joi from "joi";

const signIn = Joi.object({
  usuario: Joi.string().required().messages({
    "string.base": "O campo usuário deve ser um texto",
    "string.empty": "O campo usuário não pode estar vazio",
    "any.required": "O campo usuário é obrigatório",
  }),
  senha: Joi.string().required().messages({
    "string.base": "O campo senha deve ser um texto",
    "string.empty": "O campo senha não pode estar vazio",
    "any.required": "O campo senha é obrigatório",
  }),
});

export const signUp = Joi.object({
  id_funcionario: Joi.number().integer().required().messages({
    "number.base": "O campo ID do funcionário deve ser um número",
    "number.integer": "O campo ID do funcionário deve ser um número inteiro",
    "any.required": "O campo ID do funcionário é obrigatório",
  }),
  usuario: Joi.string().required().messages({
    "string.base": "O campo usuário deve ser um texto",
    "string.empty": "O campo usuário não pode estar vazio",
    "any.required": "O campo usuário é obrigatório",
  }),
  senha: Joi.string().required().messages({
    "string.base": "O campo senha deve ser um texto",
    "string.empty": "O campo senha não pode estar vazio",
    "any.required": "O campo senha é obrigatório",
  }),
  status: Joi.number().integer().required().messages({
    "number.base": "O campo status deve ser um número",
    "number.integer": "O campo status deve ser um número inteiro",
    "any.required": "O campo status é obrigatório",
  }),
  super_admin: Joi.number().integer().required().messages({
    "number.base": "O campo super_admin deve ser um número",
    "number.integer": "O campo super_admin deve ser um número inteiro",
    "any.required": "O campo super_admin é obrigatório",
  }),
  acessos: Joi.number().integer().required().messages({
    "number.base": "O campo acessos deve ser um número",
    "number.integer": "O campo acessos deve ser um número inteiro",
    "any.required": "O campo acessos é obrigatório",
  }),
  ultimo_acesso: Joi.date().optional().messages({
    "date.base": "O campo último acesso deve ser uma data válida",
  }),
});

const authSchemas = {
  signIn,
  signUp,
};

export default authSchemas;
