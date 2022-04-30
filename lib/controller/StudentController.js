const Reader = require("../utils/Reader");

class StudentController {
  static getStudents() {
    return Reader.readJsonFile("db.json");
  }
  static getEmails() {
    const students = Reader.readJsonFile("db.json");
    const certification = students.filter(
      (student) => student.haveCertification === true
    );
    return certification.map((student) => student.email);
  }
  static getCredits() {
    const students = Reader.readJsonFile("db.json");
    return students.filter((student) => student.credits > 500);
  }
}

module.exports = StudentController;
