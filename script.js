const usuario = { nome: "João Lucena", matricula: "386", pendencia: false, acessibilidade: true };

const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false, horarioReserva: "", horarioEntregaChave: "" },
  { id: 2, formato: "padrao", status: true, acessivel: false, horarioReserva: "", horarioEntregaChave: "" },
  { id: 3, formato: "padrao", status: true, acessivel: false, horarioReserva: "", horarioEntregaChave: "" },
  { id: 4, formato: "padrao", status: false, acessivel: true, horarioReserva: "", horarioEntregaChave: "" },
  { id: 5, formato: "padrao", status: false, acessivel: true, horarioReserva: "", horarioEntregaChave: "" },
  { id: 6, formato: "duplo", status: true, acessivel: true, horarioReserva: "", horarioEntregaChave: "" },
  { id: 7, formato: "duplo", status: false, acessivel: true, horarioReserva: "", horarioEntregaChave: "" },
  { id: 8, formato: "duplo", status: false, acessivel: true, horarioReserva: "", horarioEntregaChave: "" },
];

function reservarArmario() {
  let tipoSelecionado = document.getElementById("tipoArmario").value;

  let armariosDisponiveis = armarios.filter((armario) => {
    return armario.formato === tipoSelecionado 
          && armario.status 
          && usuario.acessibilidade === armario.acessivel
  })

  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }

  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
  let armarioEmprestado = armarios.find(armario => armario.id === armarioSorteado.id);

  const horario_reserva = new Date()

  armarioEmprestado.status = false;
  armarioEmprestado.horarioReserva = horario_reserva.toLocaleString();
  armarioEmprestado.horarioEntregaChave = new Date(horario_reserva.getTime() + 24 * 60 * 60 * 1000).toLocaleString();

  usuario.pendencia = true;

  document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso!`;
  document.getElementById("resultado").innerText += `\nHorário de entrega da chave: ${armarioEmprestado.horarioEntregaChave}`;
}