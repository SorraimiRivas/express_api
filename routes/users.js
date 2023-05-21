import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
  },
];

router.get("/", (req, res) => {
  res.send(users);
  console.log(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(`User with the name ${user.firstName} added to the DB`);
});

export default router;
