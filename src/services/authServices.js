import userRepository from "../database/repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import peopleRepository from "../database/repositories/peopleRepository.js";

dotenv.config();

export async function signInService(data) {
  try {
    const user = await userRepository.getUser(data.usuario);
    if (!user.rows.length) {
      return {
        status: 404,
        message: "Usuário inválido!",
      };
    }

    const match = await bcrypt.compare(data.senha, user.rows[0].senha);

    if (!match) {
      return {
        status: 401,
        message: "Usuário inválido!",
      };
    }

    const people = await peopleRepository.getPeopleById(
      user.rows[0].id_funcionario
    );

    const token = jwt.sign({ usuario: data.usuario }, process.env.SECRET, {
      expiresIn: "1d",
    });

    delete user.rows[0].senha;

    return {
      status: 200,
      data: {
        message: "Login efetuado com sucesso!",
        user_info: {
          usuario: user.rows[0],
          token,
          funcionario: people.rows[0],
        },
      },
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

    const hash = await bcrypt.hash(data.senha, 10);

    data.senha = hash;
    await userRepository.addUser(data);

    delete data.senha;

    const token = jwt.sign({ usuario: data.usuario }, process.env.SECRET, {
      expiresIn: "1d",
    });

    return {
      status: 201,
      data: {
        message: "Usuário adicionado com sucesso!",
        user_info: {
          usuario: data,
          token,
        },
      },
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Ops! Um erro no servidor",
    };
  }
}
