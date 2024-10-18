import Joi from "joi";

export const signInSchema = Joi.object({
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

export const signUpSchema = Joi.object({
  id_funcionario: Joi.number().integer().required().messages({
    "number.base": "O campo ID do funcionário deve ser um número",
    "number.integer": "O campo ID do funcionário deve ser um número inteiro",
    "any.required": "O campo ID do funcionário é obrigatório",
  }),
  tipo: Joi.string()
    .valid("super_admin", "admin", "gestor", "docente")
    .required()
    .messages({
      "string.base": "O campo tipo deve ser um texto",
      "any.only":
        "O campo tipo deve ser uma das seguintes opções: 'super_admin', 'admin', 'gestor', 'docente'",
      "any.required": "O campo tipo é obrigatório",
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
  acessos: Joi.number().integer().required().messages({
    "number.base": "O campo acessos deve ser um número",
    "number.integer": "O campo acessos deve ser um número inteiro",
    "any.required": "O campo acessos é obrigatório",
  }),
  ultimo_acesso: Joi.date().optional().messages({
    "date.base": "O campo último acesso deve ser uma data válida",
  }),
});
