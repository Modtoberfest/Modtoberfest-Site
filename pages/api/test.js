import sequelize from "../../lib/database";
// const Participant = require("../../models/Participant");
import Participant from "../../models/Participant";

export default async (req, res) => {
  res.statusCode = 200;
  console.log(Participant);
  const jane = await Participant.create({
    firstName: "Jane",
    lastName: "Doe",
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ jane }));
};
