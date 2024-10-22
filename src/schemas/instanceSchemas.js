import Joi from "joi";

const add = Joi.object({
  id_estado: Joi.number().integer().required().messages({
    "number.base": "O campo 'id_estado' deve ser um número.",
    "number.integer": "O campo 'id_estado' deve ser um número inteiro.",
    "any.required": "O campo 'id_estado' é obrigatório.",
  }),
  nome: Joi.string().max(255).required().messages({
    "string.base": "O campo 'nome' deve ser uma string.",
    "string.max": "O campo 'nome' deve ter no máximo 255 caracteres.",
    "any.required": "O campo 'nome' é obrigatório.",
  }),
  endereco: Joi.string().max(255).required().messages({
    "string.base": "O campo 'endereco' deve ser uma string.",
    "string.max": "O campo 'endereco' deve ter no máximo 255 caracteres.",
    "any.required": "O campo 'endereco' é obrigatório.",
  }),
  bairro: Joi.string().max(255).required().messages({
    "string.base": "O campo 'bairro' deve ser uma string.",
    "string.max": "O campo 'bairro' deve ter no máximo 255 caracteres.",
    "any.required": "O campo 'bairro' é obrigatório.",
  }),
  cep: Joi.string().pattern(/^\d+$/).required().messages({
    "string.base": "O campo 'cep' deve ser uma string.",
    "string.pattern.base": "O campo 'cep' deve conter apenas números.",
    "any.required": "O campo 'cep' é obrigatório.",
  }),
  cnpj: Joi.string().pattern(/^\d+$/).required().messages({
    "string.base": "O campo 'cnpj' deve ser uma string.",
    "string.pattern.base": "O campo 'cnpj' deve conter apenas números.",
    "any.required": "O campo 'cnpj' é obrigatório.",
  }),
});

const instanceSchemas = {
  add,
};

export default instanceSchemas;
