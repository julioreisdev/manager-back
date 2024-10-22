import instanceServices from "../services/instanceServices.js";

async function getInstances(req, res) {
  const response = await instanceServices.getInstances(req.body);
  return res.status(response.status).send(response);
}

async function addInstance(req, res) {
  const response = await instanceServices.addInstance(req.body);
  return res.status(response.status).send(response);
}

const instanceControllers = {
  getInstances,
  addInstance,
};

export default instanceControllers;
