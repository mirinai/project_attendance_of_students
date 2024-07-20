import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableHeader from "./TableHeader";
import TableBodyContents from "./TableBodyContents";

type Subject = {
  name: string;
  schedule: string;
};

type Student = {
  id: number;
  name: string;
  subjects: Subject[];
};

type PersonalTimetableProps = {
  students: Student[];
};

const PersonalTimetable = ({ students }: PersonalTimetableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHeader />
        <TableBodyContents students={students} />
      </Table>
    </TableContainer>
  );
};
export default PersonalTimetable;
