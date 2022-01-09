import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Vieworder = (props) => {
  const renderTable = ({ orderdata }) => {
    if (orderdata) {
      return orderdata.map((item) => {
        return (
          <TableRow
            key={item.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {item.id}
            </TableCell>
            <TableCell align="right">{item.hotel_name}</TableCell>
            <TableCell align="right">{item.name}</TableCell>
            <TableCell align="right">{item.phone}</TableCell>
            <TableCell align="right">{item.address}</TableCell>
            <TableCell align="right">Rs/-{item.amount}</TableCell>
            <TableCell align="right">{item.status}</TableCell>
            <TableCell align="right">{item.bank}</TableCell>
            <TableCell align="right">{item.bank_status}</TableCell>
          </TableRow>
        );
      });
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Bank</TableCell>
            <TableCell align="right">Bank status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTable(props)}</TableBody>
      </Table>
    </TableContainer>
  );
};
export default Vieworder;
