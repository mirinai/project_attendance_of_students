const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.listen(3001);

const DATABASE = {
  CONFIG: {
    host: "localhost",
    user: "root",
    password: "1111",
    database: "attendance",
  },
  QUERY: {
    LECTURE_ROOM: {},
    COURSE: {
      FINDALL: "select * from course",
      FINDIDNAME: "select course_id, course_name from course",
    },
    COURSE_SCHEDULE: {},
    CURRICULUM: {},
    TUTOR: {
      FINDALL: "select * from tutor",
      FINDEMAILPASSWORD:
        "select * from tutor where tutor_email = ? and tutor_password = ?",
    },
    EDUCATION: {},
    STUDENT: {
      FINDALL: "select * from student",
      ADDSTU:
        "insert into student (student_name,student_email,student_phone,course_id) values (?,?,?,?)",
    },
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

const getStudents = async () => executeQuery(DATABASE.QUERY.STUDENT.FINDALL);
const getCourse = async () => executeQuery(DATABASE.QUERY.COURSE.FINDALL);
const getTutor = async () => executeQuery(DATABASE.QUERY.TUTOR.FINDALL);

app.get("/student/test", async (req, res) => {
  res.json(await getStudents());
});

app.get("/course", async (req, res) => {
  res.json(await getCourse());
  // console.log(res.json(await getCourse()));
});

// course 데이터 가져오기

const getCourseIdName = async () =>
  executeQuery(DATABASE.QUERY.COURSE.FINDIDNAME);

app.get("/course/course_list", async (req, res) => {
  res.send(await getCourseIdName());
});

// 데이터 전송
const addStuents = async (
  student_name,
  student_email,
  student_phone,
  course_id
) =>
  executeQuery(DATABASE.QUERY.STUDENT.ADDSTU, [
    student_name,
    student_email,
    student_phone,
    course_id,
  ]);

app.post("/student/register", async (req, res) => {
  const students = req.body;

  console.log("Received students:", students); // 데이터 출력하여 확인

  const results = [];
  for (const student of students) {
    const { student_name, student_email, student_phone, course_id } = student;
    const result = await addStuents(
      student_name,
      student_email,
      student_phone,
      course_id
    );
    results.push(result);
  }
  res.json({ results });
});

app.get("/tutor", async (req, res) => {
  res.send(await getTutor());
});

const getTutorLogin = async (tutor_email, tutor_password) => {
  executeQuery(DATABASE.QUERY.TUTOR.FINDEMAILPASSWORD, [
    tutor_email,
    tutor_password,
  ]);
};

app.post("/tutor/login", async (req, res) => {
  console.log("안녕");
  const tutors = req.body;
  // const tutor_name = req.body.userId;
  // const tutor_password = req.body.userPassword;
  const sendData = { isLogin: "" };

  console.log("post 들");
  if (tutors) {
    console.log("if 문들");
    try {
      console.log("try 시작");
      // const [results] = await getTutorLogin(username, password);
      console.log("Received tutors: ", tutors);
      const results = [];
      console.log("for문 전");
      for (const tutor of tutors) {
        console.log("for문 시작");
        const { tutor_email, tutor_password } = tutor;
        const result = await getTutorLogin(tutor_email, tutor_password);
        results.push(result);
        console.log("수정", await getTutorLogin(tutor_email, tutor_password));
        console.log(results);
      }

      console.log("try 들");
      console.log("results :", results);

      if (results.length > 0) {
        sendData.isLogin = "True";
        res.json(sendData); // 변경: res.send -> res.json
      } else {
        sendData.isLogin = "아이디 정보 또는 비밀번호가 일치하지 않습니다.";
        res.json(sendData); // 변경: res.send -> res.json
      }
    } catch (error) {
      console.error("Database query error: ", error);
      sendData.isLogin = "서버 오류가 발생했습니다. 다시 시도해 주세요.";
      res.json(sendData); // 변경: res.send -> res.json
    }
  } else {
    sendData.isLogin = "아이디와 비밀번호를 입력하세요!";
    res.json(sendData); // 변경: res.send -> res.json
  }
});
