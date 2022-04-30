const express = require("express");
const {
  getStudents,
  getEmails,
  getCredits,
} = require("./lib/controller/StudentController");
const Reader = require("./lib/utils/Reader");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
  response.json("Code Challenge LaunchX!");
});

app.get("/v1/students", (request, response) => {
  const students = getStudents();
  response.json(students);
});

app.get("/v1/students/email", (request, response) => {
  const emails = getEmails();
  response.json(emails);
});

app.get("/v1/students/credits", (request, response) => {
  const credits = getCredits();
  response.json(credits);
});

app.listen(port, () => {
  console.log(`Student API in localhost:${port}`);
});
