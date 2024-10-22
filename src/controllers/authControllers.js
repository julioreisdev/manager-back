import authServices from "../services/authServices.js";

async function signIn(req, res) {
  const response = await authServices.signIn(req.body);
  return res.status(response.status).send(response);
}

async function signUp(req, res) {
  const response = await authServices.signUp(req.body);
  return res.status(response.status).send(response);
}

const authControllers = {
  signIn,
  signUp,
};

export default authControllers;
