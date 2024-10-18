import { signInService, signUpService } from "../services/authServices.js";

export async function signInController(req, res) {
  const response = await signInService(req.body);
  return res.status(response.status).send({ message: response.message });
}

export async function signUpController(req, res) {
  const response = await signUpService(req.body);
  return res.status(response.status).send({ message: response.message });
}
