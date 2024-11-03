import studentServices from "../services/studentServices.js";

async function getAll(req, res) {
  const response = await studentServices.getAll(req.query);
  return res.status(response.status).send(response);
}

async function addStudent(req, res) {
  const response = await studentServices.addStudent(req.body);
  return res.status(response.status).send(response);
}

const studentControllers = {
  getAll,
  addStudent,
};

export default studentControllers;
