const Reader = require("../utils/Reader");

class StudentController {
  static getStudents() {
    return Reader.readJsonFile("db.json");
  }
  static getEmails() {
    students = this.getStudents();
    return students.map((student) => student.email);
  }
}

module.exports = StudentController;
