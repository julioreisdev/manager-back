import studentRepository from "../database/repositories/studentRepository.js";

async function getAll() {
  try {
    const students = await studentRepository.getAll();
    return {
      status: 200,
      data: {
        message: "Busca bem sucedida!",
        alunos: students.rows,
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
