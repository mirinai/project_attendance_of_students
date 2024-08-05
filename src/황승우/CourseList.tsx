import { FormControl, NativeSelect } from "@mui/material";

export type CourseListProps = {
  course?: string;
};

const CourseList = ({ course }: CourseListProps) => {
  return (
    <>
      <FormControl fullWidth>
        <NativeSelect
          value={course}
          defaultValue={"kor"}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value={"math"}>수학</option>
          <option value={"science"}>과학</option>
          <option value={"eng"}>영어</option>
          <option value={"his"}>한국사</option>
          <option value={"kor"}>국어</option>
        </NativeSelect>
      </FormControl>
    </>
  );
};

export default CourseList;
