import React from 'react';
import { Paper,Table,TableBody,TableCell,TableContainer,TableHead,
  TablePagination,TableRow} from "@mui/material";

const columns = [
    { id: 'കോഡ്', label: 'കോഡ്', minWidth: 60 },
    { id: 'കുടുംബനാഥൻ്റെ_പേര്', label: 'കുടുംബനാഥൻ്റെ പേര്', minWidth: 80,align: 'center' },
    {
      id: 'വയസ്സ്_ജനന_തീയ്യതി',
      label: 'വയസ്സ്/ജനന തീയ്യതി',
      minWidth: 50,
      align: 'center'
    },
    {
      id: 'വാർഡിൻ്റെ_പേര്',
      label: 'വാർഡിൻ്റെ പേര്',
      minWidth: 80,
      align: 'right'
    },
    {
      id: 'മേൽവിലാസം',
      label: 'മേൽവിലാസം',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'ഫോൺ_നമ്പർ',
      label: 'ഫോൺ നമ്പർ',
      minWidth: 100,
      align: 'right',
    },
    {
      id: 'റേഷൻ_കാർഡ്',
      label: 'റേഷൻ കാർഡ്',
      minWidth: 100,
      align: 'right',
    },

  ];


  let uniqueKey=0

const DisplayTable = (props) => {

   const rows=props.dataView

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return(
  <Paper sx={{ width: '100%', overflow: 'hidden' }}>
  <TableContainer sx={{ maxHeight: 440 }}>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ minWidth: column.minWidth }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={uniqueKey++}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      { value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  </TableContainer>
  <TablePagination
    rowsPerPageOptions={[10, 25, 100]}
    component="div"
    count={rows.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />
</Paper>


 ); 

 
}

export default DisplayTable