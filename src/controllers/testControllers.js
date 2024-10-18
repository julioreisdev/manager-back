export async function helloWeducarController(req, res) {
  return res.send("Hello Weducar!");
}

export async function helloWeducarWithParamsController(req, res) {
  return res.send({ message: "Hello Weducar!", data: req.body });
}
