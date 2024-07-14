import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Attendance = () => {
  return (
    <>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>날짜</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>출석여부</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>07/14</TableCell>
            <TableCell>ㅇㅇㅇ</TableCell>
            <TableCell>버튼</TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>
    </>
  );
};

export default Attendance;
