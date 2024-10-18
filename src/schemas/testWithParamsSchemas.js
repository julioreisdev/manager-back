import Joi from "joi";

export const testWithParamsSchema = Joi.object({
  message: Joi.string().required().messages({
    "string.base": "O campo message deve ser um texto",
    "string.empty": "O campo message não pode estar vazio",
    "any.required": "O campo message é obrigatório",
  }),
});
