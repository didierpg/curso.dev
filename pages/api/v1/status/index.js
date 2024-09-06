function status(request, response) {
  response.status(200).json("áéíóú");
}

export default status;
