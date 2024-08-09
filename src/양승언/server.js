const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 3000;

app.listen(port);
const DATABASE = {
  CONFIG: {
    host: "localhost",
    user: "root",
    password: "1111",
    database: "std_check",
  },

  QUERY: {
    LECTURE_ROOM: {},
    COURSE: {},
    COURSE_SCHEDULE: {},
    CURRICULUM: {},
    TUTOR: {
      FINDALL: "SELECT * FROM TUTOR",
    },
    EDUCATION: {},
    STUDENT: {},
    ENROLLMENT: {},
  },
};

const executeQuery = async (query, params = []) => {
  try {
    const connection = await mysql.createConnection(DATABASE.CONFIG);
    const [results] = await connection.query(query, params);
    await connection.end();
    return results;
  } catch (err) {
    console.log(err);
  }
};

const getTutors = async () => await executeQuery(DATABASE.QUERY.TUTOR.FINDALL);

app.get("/tutor/json", async (req, res) => {
  res.json(getTutors());
});
