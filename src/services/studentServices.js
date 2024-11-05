import studentRepository from "../database/repositories/studentRepository.js";

async function getAll(params) {
  const convertedParams = {
    instanciaId: params.id_instancia,
    orderBy: params.order,
    anoLetivoId: params.id_ano_letivo,
    initialRow: params.initial_row,
    finalRow: params.final_row,
  };
  try {
    const students = await studentRepository.getAll(convertedParams);
    return {
      status: 200,
      data: {
        message: "Busca bem sucedida!!",
        alunos: students.rows,
        filtros: params,
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

async function addStudent(data) {
  try {
    const student = await studentRepository.getStudent(data);
    if (student.rows.length) {
      return {
        status: 409,
        data: {
          message: "Aluno já cadastrado!",
        },
      };
    }

    function generateRandomSixDigitNumber() {
      const now = new Date();
      const seed = now.getTime();
      const random = Math.floor((seed % 900000) + 100000);
      return random;
    }

    const random = generateRandomSixDigitNumber();

    data.matricula = Number(`${data.id_instancia}${random}`);

    await studentRepository.addStudent(data);

    return {
      status: 201,
      data: {
        message: "Aluno cadastrado com sucesso",
        aluno: data,
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

const studentServices = {
  getAll,
  addStudent,
};

export default studentServices;
