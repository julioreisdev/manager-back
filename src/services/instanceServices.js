import instanceRepository from "../database/repositories/instanceRepository.js";

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
};

export default instanceServices;
