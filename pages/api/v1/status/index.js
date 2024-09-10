import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("select 1 + 1;");
  console.log(result);

  response.status(200).json("áéíóú");
}

export default status;
