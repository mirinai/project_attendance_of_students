import axios from "axios";
import { useState, useEffect } from "react";

const StudentName = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("/classcontent").then((response) => {
      setMessage(response.data.message);
    });
  }, []);

  return <div>{message}</div>;
};

export default StudentName;
