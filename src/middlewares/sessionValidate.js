import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function sessionValidate(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    res.locals.session = decoded;
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
}
