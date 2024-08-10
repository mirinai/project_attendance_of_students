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

// type Subject = {
//   name: string;
//   schedule: string;
// };

type Tutors = {
  id: number;
  name: string;
  phone: string;
  email: string;
  // subjects: Subject[];
};

type PersonalTimetableProps = {
  tutors: Tutors[];
};

const PersonalTimetable = ({ tutors }: PersonalTimetableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHeader />
        <TableBodyContents tutors={tutors} />
      </Table>
    </TableContainer>
  );
};
export default PersonalTimetable;
