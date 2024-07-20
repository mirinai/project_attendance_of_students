import { TableBody, TableRow, TableCell } from "@mui/material";

type Subject = {
  name: string;
  schedule: string;
};

type Student = {
  id: number;
  name: string;
  subjects: Subject[];
};

type TableBodyContentsProps = {
  students: Student[];
};

const TableBodyContents = ({ students }: TableBodyContentsProps) => {
  return (
    <TableBody>
      {students.map((student) =>
        student.subjects.map((subject, index) => (
          <TableRow key={`${student.id}-${index}`}>
            {index === 0 && (
              <TableCell rowSpan={student.subjects.length}>
                {student.id}
              </TableCell>
            )}
            {index === 0 && (
              <TableCell rowSpan={student.subjects.length}>
                {student.name}
              </TableCell>
            )}
            <TableCell>{subject.name}</TableCell>
            <TableCell>{subject.schedule}</TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  );
};

export default TableBodyContents;
