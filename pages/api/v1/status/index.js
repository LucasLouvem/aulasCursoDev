function status(request, response) {
  response.status(200).json({ texto: "Alunos do curso.dev caçando" });
}

export default status;
