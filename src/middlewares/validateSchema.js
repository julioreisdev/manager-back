export function validateSchema(schema) {
  const value = (req, res, next) => {
    const body = req._body ? req.body : req.params;
    const { error } = schema.validate(body, { abortEarly: true });

    if (error) {
      return res
        .status(422)
        .send({ message: error.details.map((detail) => detail.message)[0] });
    }

    next();
  };

  return value;
}
