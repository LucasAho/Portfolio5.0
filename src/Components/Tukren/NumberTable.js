import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(number, base6, base10) {
    return { number, base6, base10 };
}

const rows = [
    createData('Hōwt', 0, '-'),
    createData('Din', 1, '-'),
    createData('Dima', 2, '-'),
    createData('Bahl', 3, '-'),
    createData('Sik', 4, '-'),
    createData('Yan', 5, '-'),
    createData('Yust', 10, 6),
    createData('Yusdin', 11, 7),
    createData('Yusdima', 12, 8),
    createData('Yusbahl', 13, 9),
    createData('Yussik', 14, 10),
    createData('Yuyan', 15, 11),
    createData('Dimayus', 20, 12),
    createData('Dimayus-din', 21, 13),
    createData('Dimayus-dima', 22, 14),
    createData('Dimayus-bahl', 23, 15),
    createData('Dimayus-sik', 24, 16),
    createData('Dimayus-yan', 25, 17),
    createData('Bahlyus', 30, 18),
    createData('Bahlyu-din', 31, 19),
    createData('Bahlyu-dima', 32, 20),
    createData('Bahlyu-bahl', 33, 21),
    createData('Bahlyu-sik', 34, 22),
    createData('Bahlyu-yan', 35, 23),
    createData('Sikyus', 40, 24),
    createData('Sikyus-din', 41, 25),
    createData('Sikyus-dima', 42, 26),
    createData('Sikyus-bahl', 43, 27),
    createData('Sikyus-sik', 44, 28),
    createData('Sikyus-yan', 45, 29),
    createData('Yanyo', 50, 30),
    createData('Yanyo-din', 51, 31),
    createData('Yanyo-dima', 52, 32),
    createData('Yanyo-bahl', 53, 33),
    createData('Yanyo-sik', 54, 34),
    createData('Yanyo-yan', 55, 35),
    createData('Nalot', 100, 36),
    createData('Nalot-yust', 110, 42),
    createData('Nalot-dimayo', 120, 48),
    createData('Nalot-bahlyo', 130, 54),
    createData('Nalot-sikyo', 140, 60),
    createData('Nalot-yanyo', 150, 66),
    createData('Dimalot', 200, 72),
    createData('Bahllot', 300, 108),
    createData('Siklot', 400, 144),
    createData('Yanlot', 500, 180),
    createData('Duq', 1000, 216),
    createData('Dimaduq', 2000, 432),
];

export default function NumberTable() {
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [page, setPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Number</TableCell>
                            <TableCell align="right">Base 6</TableCell>
                            <TableCell align="right">Base 10</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow
                                    key={row.index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.number}
                                    </TableCell>
                                    <TableCell align="right">{row.base6}</TableCell>
                                    <TableCell align="right">{row.base10}</TableCell>
                                </TableRow>
                            ))}
                        {emptyRows > 0 && (
                            <TableRow
                                style={{
                                    height: 53 * emptyRows,
                                }}
                            >
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer >
            <TablePagination
                rowsPerPageOptions={[6]}
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