export default {
  students: {
    getFailure: () => 'Houve um erro ao buscar os aluno(a)s cadastrados',
    createSuccess: student => `Aluno(a) ${student.name} criado com sucesso!`,
    createFailure: () =>
      'Não foi possível criar o aluno(a), verifique os campos',
    deleteSuccess: id => `Aluno(a) [${id}] deletado com sucesso!`,
    deleteFailure: id => `Não foi possível deletar o aluno(a) [${id}]`,
    editSuccess: student => `Aluno(a) ${student.name} editado com sucesso!`,
    editFailure: id => `Não foi possível editar o aluno(a) [${id}]`
  },
  plans: {
    getFailure: () => 'Houve um erro ao buscar os planos cadastrados',
    createSuccess: plan => `Plano ${plan.title} criado com sucesso!`,
    createFailure: () => 'Não foi possível criar o plano, verifique os campos',
    deleteSuccess: id => `Plano [${id}] deletado com sucesso!`,
    deleteFailure: id => `Não foi possível deletar o plano [${id}]`,
    editSuccess: plan => `Plano ${plan.title} editado com sucesso!`,
    editFailure: id => `Não foi possível editar o plano [${id}]`
  },
  enrollments: {
    getFailure: () => 'Houve um erro ao buscar as matrículas cadastradas',
    createSuccess: enrollment =>
      `Matrícula [${enrollment.id}] criada com sucesso!`,
    createFailure: () =>
      'Não foi possível criar a matrícula, verifique os campos',
    deleteSuccess: id => `Matrícula [${id}] deletada com sucesso!`,
    deleteFailure: id => `Não foi possível deletar a matrícula [${id}]`,
    editSuccess: enrollment =>
      `Matrícula [${enrollment.id}] editada com sucesso!`,
    editFailure: id => `Não foi possível editar a matrícula [${id}]`
  },
  helpOrders: {
    getFailure: () => 'Houve um erro ao buscar os pedidos de auxílio',
    answerSuccess: id => `Pedido de auxílio [${id}] respondido com sucesso!`,
    answerFailure: id => `Erro ao responder pedido de auxílio [${id}]`
  }
}
