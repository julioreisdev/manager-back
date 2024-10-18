import { addPeopleService } from "../services/peopleServices.js";

export async function addPeopleController(req, res) {
  const response = await addPeopleService(req.body);
  return res.status(response.status).send({ message: response.message });
}
