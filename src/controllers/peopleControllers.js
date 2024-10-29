import peopleServices from "../services/peopleServices.js";

async function addPeople(req, res) {
  const response = await peopleServices.addPeople(req.body);
  return res.status(response.status).send({ message: response.message });
}

const peopleControllers = {
  addPeople,
};

export default peopleControllers;
