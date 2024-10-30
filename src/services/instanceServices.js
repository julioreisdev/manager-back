import instanceRepository from "../database/repositories/instanceRepository.js";
import peopleRepository from "../database/repositories/peopleRepository.js";
import userRepository from "../database/repositories/userRepository.js";

async function getUserInstances(data) {
  try {
    const allUsers = await userRepository.getUserById(data.id);

    if (!allUsers.rows.length) {
      return {
        status: 404,
        message: "Usuário inválido!",
      };
    }

    if (allUsers.rows[0].super_admin) {
      const people = await peopleRepository.getPeopleById(
        allUsers.rows[0].id_funcionario
      );

      const instances = await instanceRepository.getInstances();
      return {
        status: 200,
        data: {
          message: "Busca realizada com sucesso!",
          user_info: {
            usuario: allUsers.rows[0],
            instancias: instances.rows.map((i) => {
              return {
                id: i.id_instancia,
                nome: i.nome,
              };
            }),
            funcionario: people.rows[0],
          },
        },
      };
    } else {
      const userData = await userRepository.getUserInstances(data.id);
      const people = await peopleRepository.getPeopleById(
        userData.rows[0].id_funcionario
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

async function getInstances() {
  try {
    const data = await instanceRepository.getInstances();
    return {
      status: 200,
      data: {
        message: "Busca de Instâncias realizada com sucesso!",
        instancias: data.rows,
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

async function addInstance(data) {
  try {
    const response = await instanceRepository.getInstanceByCnpj(data.cnpj);

    if (response.rows.length) {
      return {
        status: 409,
        message: "Já existe uma instância com esse CNPJ!",
      };
    }

    await instanceRepository.addInstance(data);

    return {
      status: 201,
      data: {
        message: "Instância adicionada com sucesso!",
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

const instanceServices = {
  getInstances,
  addInstance,
  getUserInstances,
};

export default instanceServices;
