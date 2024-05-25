import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(JobId, Name, Position, level1, level2, level3, level4, totalMark,status, action) {
  return { JobId, Name, Position, level1, level2, level3, level4, totalMark,status, action};
}

const rows = [
  createData('#001', "Jhon Doe", "Designer", "6/10", "7/10", "3/10", "8/10", "24/40", "Active", "*"),
  createData('#001', "Jhon Doe", "Designer", "6/10", "7/10", "3/10", "8/10", "24/40", "Active", "*"),
  createData('#001', "Jhon Doe", "Designer", "6/10", "7/10", "3/10", "8/10", "24/40", "Active", "*"),
  createData('#001', "Jhon Doe", "Designer", "6/10", "7/10", "3/10", "8/10", "24/40", "Active", "*"),
  createData('#001', "Jhon Doe", "Designer", "6/10", "7/10", "3/10", "8/10", "24/40", "Active", "*"),
  createData('#001', "Jhon Doe", "Designer", "6/10", "7/10", "3/10", "8/10", "24/40", "Active", "*"),
  createData('#001', "Jhon Doe", "Designer", "6/10", "7/10", "3/10", "8/10", "24/40", "Active", "*"),
];

export default function MTable() {
    return (
        <Paper sx={{ width: '100%' }}>
    <TableContainer sx={{ maxHeight: 380 }}>
          <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Job ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">1st&nbsp;level</TableCell>
            <TableCell align="right">2nd&nbsp;level</TableCell>
            <TableCell align="right">3rd&nbsp;level</TableCell>
            <TableCell align="right">4th&nbsp;level</TableCell>
            <TableCell align="right">Total&nbsp;Marks</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.JobId}</TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.Position}</TableCell>
              <TableCell align="right">{row.level1}</TableCell>
              <TableCell align="right">{row.level2}</TableCell>
              <TableCell align="right">{row.level3}</TableCell>
              <TableCell align="right">{row.level4}</TableCell>
              <TableCell align="right">{row.totalMark}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
            </TableContainer>
            </Paper>
  );
}
