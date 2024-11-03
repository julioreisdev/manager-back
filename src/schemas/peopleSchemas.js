import Joi from "joi";

const add = Joi.object({
  id_escolaridade: Joi.number().integer().required().messages({
    "number.base": "O campo ID da escolaridade deve ser um número",
    "number.integer": "O campo ID da escolaridade deve ser um número inteiro",
    "any.required": "O campo ID da escolaridade é obrigatório",
  }),
  nome: Joi.string().required().messages({
    "string.base": "O campo nome deve ser um texto",
    "string.empty": "O campo nome não pode estar vazio",
    "any.required": "O campo nome é obrigatório",
  }),
  sexo: Joi.string().valid("M", "F").required().messages({
    "string.base": "O campo sexo deve ser um texto",
    "any.only": "O campo sexo deve ser 'Masculino' ou 'Feminino'",
    "any.required": "O campo sexo é obrigatório",
  }),
  data_nascimento: Joi.date().required().messages({
    "date.base": "O campo data de nascimento deve ser uma data válida",
    "any.required": "O campo data de nascimento é obrigatório",
  }),
  rg: Joi.string().optional().messages({
    "string.base": "O campo RG deve ser um texto",
  }),
  cpf: Joi.string().required().messages({
    "string.base": "O campo CPF deve ser um texto",
    "string.empty": "O campo CPF não pode estar vazio",
    "any.required": "O campo CPF é obrigatório",
  }),
  foto: Joi.string().uri().optional().messages({
    "string.base": "O campo foto deve ser um texto",
    "string.uri": "O campo foto deve ser uma URL válida",
  }),
});

const peopleSchemas = {
  add,
};

export default peopleSchemas;
