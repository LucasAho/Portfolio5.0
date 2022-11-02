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
                        <TableRow>
                            <TableCell className='bbottom' scope="col"> </TableCell>
                            <TableCell className='bleft btop bbottom' align='center' scope="col"><strong>Nom.</strong></TableCell>
                            <TableCell className='bleft btop bbottom' align='center' scope="col"><strong>Acc.</strong></TableCell>
                            <TableCell className='bleft btop bbottom bright' align='center' scope="col"><strong>Gen.</strong></TableCell>
                            <TableCell className='bleft btop bbottom bright' align='center' scope="col"><strong>Dat.</strong></TableCell>
                            <TableCell className='bleft btop bbottom bright' align='center' scope="col"><strong>Loc.</strong></TableCell>
                            <TableCell className='bleft btop bbottom bright' align='center' scope="col"><strong>Instr.</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>Neutral</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Di</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Dai</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Mi</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Dim</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Baf</TableCell>
                            <TableCell className='bbottom bleft bright' align='center'>Nan</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>Alien</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Ku</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Kul</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Kim</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Kib</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Kab</TableCell>
                            <TableCell className='bbottom bleft bright' align='center'>Kan</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>Inanimate</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Si</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Sau</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Sim</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Seb</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Saf</TableCell>
                            <TableCell className='bbottom bleft bright' align='center'>Sun</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>Formal</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>O</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Do</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Dom</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Dokd</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Dei</TableCell>
                            <TableCell className='bbottom bleft bright' align='center'>No</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ArticleTable;