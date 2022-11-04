import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './VoS.css';
const ArticleTable = () => {
    return (
        <div>
            <TableContainer style={{ backgroundColor: '#AFA8BA' }} component={Paper}>
                <Table size='small'>
                    <TableHead>
                        <TableRow className='bbottom btop'>
                            <TableCell scope="col"> </TableCell>
                            <TableCell className='bleft' align='center' scope="col"><strong>Nom.</strong></TableCell>
                            <TableCell className='bleft' align='center' scope="col"><strong>Acc.</strong></TableCell>
                            <TableCell className='bleft bright' align='center' scope="col"><strong>Gen.</strong></TableCell>
                            <TableCell className='bleft bright' align='center' scope="col"><strong>Dat.</strong></TableCell>
                            <TableCell className='bleft bright' align='center' scope="col"><strong>Loc.</strong></TableCell>
                            <TableCell className='bleft bright' align='center' scope="col"><strong>Instr.</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row"><strong>Neutral</strong></TableCell>
                            <TableCell className='bleft' align='center'>Di</TableCell>
                            <TableCell className='bleft' align='center'>Dai</TableCell>
                            <TableCell className='bleft' align='center'>Mi</TableCell>
                            <TableCell className='bleft' align='center'>Dim</TableCell>
                            <TableCell className='bleft' align='center'>Baf</TableCell>
                            <TableCell className='bleft bright' align='center'>Nan</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row"><strong>Alien</strong></TableCell>
                            <TableCell className='bleft' align='center'>Ku</TableCell>
                            <TableCell className='bleft' align='center'>Kul</TableCell>
                            <TableCell className='bleft' align='center'>Kim</TableCell>
                            <TableCell className='bleft' align='center'>Kib</TableCell>
                            <TableCell className='bleft' align='center'>Kab</TableCell>
                            <TableCell className='bleft bright' align='center'>Kan</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row"><strong>Inanimate</strong></TableCell>
                            <TableCell className='bleft' align='center'>Si</TableCell>
                            <TableCell className='bleft' align='center'>Sau</TableCell>
                            <TableCell className='bleft' align='center'>Sim</TableCell>
                            <TableCell className='bleft' align='center'>Seb</TableCell>
                            <TableCell className='bleft' align='center'>Saf</TableCell>
                            <TableCell className='bleft bright' align='center'>Sun</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row"><strong>Formal</strong></TableCell>
                            <TableCell className='bleft' align='center'>O</TableCell>
                            <TableCell className='bleft' align='center'>Do</TableCell>
                            <TableCell className='bleft' align='center'>Dom</TableCell>
                            <TableCell className='bleft' align='center'>Dokd</TableCell>
                            <TableCell className='bleft' align='center'>Dei</TableCell>
                            <TableCell className='bleft bright' align='center'>No</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ArticleTable;