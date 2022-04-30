const {
  getStudents,
  getEmails,
  getCredits,
} = require("../../lib/controller/StudentController");

describe("Test para StudentController", () => {
  test("Consultar todos los estudiantes", () => {
    const students = [
      { name: "Warren", previousCourses: 1 },
      { name: "Lucinda", previousCourses: 6, haveCertification: true },
      { name: "Fuentes", haveCertification: true },
    ];
    expect(students).toStrictEqual([
      { name: "Warren", previousCourses: 1 },
      { name: "Lucinda", previousCourses: 6, haveCertification: true },
      { name: "Fuentes", haveCertification: true },
    ]);
  });

  test("Consultar todos los emails de estudiantes con certificación", () => {
    const students = [
      { name: "Warren", previousCourses: 1 },
      { email: "Todd@visualpartnership.xyz", haveCertification: true },
    ];
    const emails = getEmails(students);
    expect(emails).toStrictEqual(["Todd@visualpartnership.xyz"]);
  });

  test("Consultar todos los emails de estudiantes con creditos mayor a 500", () => {
    const students = [
      { name: "Warren", previousCourses: 1 },
      { name: "Fuentes", credits: 600 },
    ];
    const creditos = getCredits(students);
    expect(creditos).toStrictEqual([{ name: "Fuentes", credits: 600 }]);
  });
});
