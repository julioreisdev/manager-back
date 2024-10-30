import userRepository from "../database/repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import peopleRepository from "../database/repositories/peopleRepository.js";
import instanceRepository from "../database/repositories/instanceRepository.js";

dotenv.config();

async function signIn(data) {
  try {
    const allUsers = await userRepository.getAllUsers(data.usuario);

    if (!allUsers.rows.length) {
      return {
        status: 404,
        message: "Usuário inválido!",
      };
    }

    const match = await bcrypt.compare(data.senha, allUsers.rows[0].senha);

    if (!match) {
      return {
        status: 401,
        message: "Usuário inválido!",
      };
    }

    if (allUsers.rows[0].super_admin) {
      const people = await peopleRepository.getPeopleById(
        allUsers.rows[0].id_funcionario
      );
      const token = jwt.sign(
        { usuario: allUsers.rows[0].usuario },
        process.env.SECRET,
        {
          expiresIn: "1d",
        }
      );
      const instances = await instanceRepository.getInstances();
      return {
        status: 200,
        data: {
          message: "Login efetuado com sucesso!",
          user_info: {
            usuario: allUsers.rows[0],
            instancias: instances.rows.map((i) => {
              return {
                id: i.id_instancia,
                nome: i.nome,
              };
            }),
            token,
            funcionario: people.rows[0],
          },
        },
      };
    } else {
      const userData = await userRepository.getUser(data.usuario);
      const people = await peopleRepository.getPeopleById(
        userData.rows[0].id_funcionario
      );

      const token = jwt.sign(
        { usuario: userData.rows[0].usuario },
        process.env.SECRET,
        {
          expiresIn: "1d",
        }
      );
      for (let i = 0; i < userData.rows.length; i++) {
        delete userData.rows[i].senha;
      }
      const user = { ...userData.rows[0] };
      delete user.id_instancia;
      delete user.tipo;
      delete user.id_funcionario;
      return {
        status: 200,
        data: {
          message: "Login efetuado com sucesso!",
          user_info: {
            usuario: user,
            instancias: userData.rows.map((i) => {
              return { id: i.id_instancia, tipo: i.tipo, nome: i.nome };
            }),
            token,
            funcionario: people.rows[0],
          },
        },
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Ops! Um erro no servidor",
    };
  }
}

async function signUp(res, data) {
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

    return {
      status: 201,
      data: {
        message: "Usuário adicionado com sucesso!",
        user_info: {
          usuario: data,
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

const authServices = {
  signIn,
  signUp,
};

export default authServices;
