import peopleRepository from "../database/repositories/peopleRepository.js";

async function addPeople(data) {
  try {
    const peopleCpf = await peopleRepository.getPeopleByCpf(data.cpf);
    if (peopleCpf.rows.length) {
      return {
        status: 409,
        message: "CPF já cadastrado!",
      };
    }

    const peopleRg = await peopleRepository.getPeopleByRg(data.rg);
    if (peopleRg.rows.length) {
      return {
        status: 409,
        message: "RG já cadastrado!",
      };
    }

    console.log(data);

    await peopleRepository.addPeople(data);
    return {
      status: 201,
      message: "Funcionário cadastrado com sucesso!",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Ops! Um erro no servidor",
    };
  }
}

const peopleServices = {
  addPeople,
};

export default peopleServices;
