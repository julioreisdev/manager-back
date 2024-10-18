import userRepository from "../database/repositories/userRepository.js";
import bcrypt from "bcrypt";

export async function signInService(data) {
  try {
    const user = await userRepository.getUser(data.usuario);
    if (!user.length) {
      return {
        status: 404,
        message: "Usuário inválido!",
      };
    }
    return {
      status: 200,
      message: "Login efetuado com sucesso!",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Ops! Um erro no servidor",
    };
  }
}

export async function signUpService(data) {
  try {
    const user = await userRepository.getUser(data.usuario);
    if (user.rows.length) {
      return {
        status: 409,
        message: "Usuário já existe!",
      };
    }
    data.senha = await bcrypt.hash(data.senha, 10);
    await userRepository.addUser(data);
    return {
      status: 201,
      message: "Usuário adicionado com sucesso!",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Ops! Um erro no servidor",
    };
  }
}
