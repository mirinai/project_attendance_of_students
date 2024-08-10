import { TableBody, TableRow, TableCell } from "@mui/material";

// type Subject = {
//   name: string;
//   schedule: string;
// };

type Tutors = {
  id: number;
  name: string;
  phone: string;
  email: string;
  curriculum_id: number;
  // subjects: Subject[];
};

type TableBodyContentsProps = {
  tutors: Tutors[];
};

const TableBodyContents = ({ tutors }: TableBodyContentsProps) => {
  return (
    <TableBody>
      {tutors.map((tutors) => (
        // tutors.subjects.map((subject, index) => (
        <TableRow>
          <TableCell>{tutors.id}</TableCell>
          <TableCell>{tutors.name}</TableCell>
          <TableCell>{tutors.phone}</TableCell>
          <TableCell>{tutors.email}</TableCell>
          <TableCell>{tutors.curriculum_id}</TableCell>
          {/* {index === 0 && (
              <TableCell rowSpan={tutors.subjects.length}>
                {tutors.id}
              </TableCell>
            )}
            {index === 0 && (
              <TableCell rowSpan={tutors.subjects.length}>
                {tutors.name}
              </TableCell>
            )}
            {index === 0 && (
              <TableCell rowSpan={tutors.subjects.length}>
                {tutors.phone}
              </TableCell>
            )}
            {index === 0 && (
              <TableCell rowSpan={tutors.subjects.length}>
                {tutors.email}
              </TableCell>
            )} */}
          {/* <TableCell>{subject.name}</TableCell>
            <TableCell>{subject.schedule}</TableCell> */}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyContents;
