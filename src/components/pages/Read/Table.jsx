import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Tabela() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="Tabela basica">
        <TableHead>
          <TableRow>
            <TableCell>Dado1</TableCell>
            <TableCell align="right">Dado2</TableCell>
            <TableCell align="right">Dado3</TableCell>
            <TableCell align="right">Dado3</TableCell>
            <TableCell align="right">Dado3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">Teste</TableCell>
              <TableCell align="right">Teste</TableCell>
              <TableCell align="right">Teste</TableCell>
              <TableCell align="right">Teste</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
