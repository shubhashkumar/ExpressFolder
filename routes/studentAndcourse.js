const express = require("express");
const stuCourse = express.Router();

const students = [
  { id: 1, name: "Alice" },

  { id: 2, name: "Bob" },

  { id: 3, name: "Charlie" },
];
const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

//1.
stuCourse.get("/", (req, res, next) => {
  res.send(`<h1>Welcome to the Student & Course Portal API!</h1> `);
});
//2.
stuCourse.get("/students", (req, res, next) => {
  const res1=students.map((s)=>
    {
        return (s.name);
    });
    res.send(`Students: ${res1}`);
});
//3.
stuCourse.get("/students/:id", (req, res, next) => {
    const studentId = parseInt(req.params.id);
     console.log(`${studentId}`);
      const student = students.find(student => student.id === studentId);
    if (student) {
      res.json(student.name); // Send the student data as a response
    } else {
      res.status(404).send('Student not found'); // Handle student not found
    }
   
});
//4.
stuCourse.get("/courses", (req, res, next) => {
  const res2=courses.map((c)=>
    {
        return (c.name);
    });
    res.send(`courses: ${res2}`);
});
//5.
stuCourse.get("/courses/:id", (req, res, next) => {
  const courseId = parseInt(req.params.id);
  console.log(`${courseId}`);
   const course = courses.find(course => course.id === courseId);
 if (course) {
   res.json(`Course: ${course.name}, ${course.description}`); // Send the student data as a response
 } else {
   res.status(404).send('course not found'); // Handle student not found
 }
});
//6.
stuCourse.get("*", (req, res, next) => {
  console.log(req.url);
  res.status(404).send(`<h1> 404 -Page Not Found</h1> `);
});

module.exports=stuCourse;