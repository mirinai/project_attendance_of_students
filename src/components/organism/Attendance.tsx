import { Button, ButtonGroup } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Attendance = () => {
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 200,
    },
    {
      field: "attendance",
      headerName: "Attendance",
      width: 200,
    },
    {
      field: "memo",
      headerName: "Memo",
      width: 200,
    },
  ];

  const rows = [
    { id: 1, fullName: "ㅇㅇㅇ", attendance: "출석 | 지각 | 결석", memo: "+" },
    { id: 2, fullName: "ㅇㅇㅇ", attendance: "출석 | 지각 | 결석", memo: "+" },
    { id: 3, fullName: "ㅇㅇㅇ", attendance: "출석 | 지각 | 결석", memo: "+" },
    { id: 4, fullName: "ㅇㅇㅇ", attendance: "출석 | 지각 | 결석", memo: "+" },
    { id: 5, fullName: "ㅇㅇㅇ", attendance: "출석 | 지각 | 결석", memo: "+" },
    { id: 6, fullName: "ㅇㅇㅇ", attendance: "출석 | 지각 | 결석", memo: "+" },
    { id: 7, fullName: "ㅇㅇㅇ", attendance: "출석 | 지각 | 결석", memo: "+" },
    { id: 8, fullName: "ㅇㅇㅇ", attendance: "출석 | 지각 | 결석", memo: "+" },
    { id: 9, fullName: "ㅇㅇㅇ", attendance: "출석 | 지각 | 결석", memo: "+" },
  ];

  const today = `${new Date().getMonth() + 1}월 ${new Date().getDate()}일`;

  return (
    <>
      <div className="w-full h-full py-5 flex flex-col gap-10 items-center">
        <div className="text-5xl">{today}</div>
        <Box
          sx={{
            height: "80%",
            width: "100%",
            maxWidth: "50%",
            margin: "0 auto",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>

      {/* 
      <table className="mt-5 w-full max-w-4xl mx-auto">
        <tr className="py-3 border-b border-black grid grid-cols-4 justify-items-center items-center">
          <th>번호</th>
          <th>이름</th>
          <th>출석여부</th>
          <th>비고</th>
        </tr>

        <tr className="py-3 border-b border-black grid grid-cols-4 justify-items-center items-center">
          <td>A01</td>
          <td>ㅇㅇㅇ</td>
          <td>
            <ButtonGroup variant="outlined" size="small">
              <Button>출석</Button>
              <Button>지각</Button>
              <Button>결석</Button>
            </ButtonGroup>
          </td>
          <td className="hover:cursor-pointer">
            <AddCircleOutlineOutlinedIcon />
          </td>
        </tr>
      </table>
       */}
    </>
  );
};

export default Attendance;
