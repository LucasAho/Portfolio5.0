import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './VoS.css';
const VerbTense = () => {
    return (
        <div>
            <TableContainer style={{ backgroundColor: '#AFA8BA' }} component={Paper}>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell className='bbottom' scope="col"> </TableCell>
                            <TableCell className='bleft btop bbottom' align='center' scope="col"><strong>Perfective</strong></TableCell>
                            <TableCell className='bleft btop bbottom' align='center' scope="col"><strong>Imperfective</strong></TableCell>
                            <TableCell className='bleft btop bbottom bright' align='center' scope="col"><strong>Habitual</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>Colony Past</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Nodof</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Nodin</TableCell>
                            <TableCell className='bbottom bleft bright' align='center'>Noduk</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>Lifetime Past</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Gof</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Binof</TableCell>
                            <TableCell className='bbottom bleft bright' align='center'>Goden</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>Recent Past</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Sahil</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Bin</TableCell>
                            <TableCell className='bbottom bleft bright' align='center'>Sudan</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>Present</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>-</TableCell>
                            <TableCell className='bbottom bleft' align='center'>-</TableCell>
                            <TableCell className='bbottom bleft bright' align='center'>-</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>Future</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Nat</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Nabi</TableCell>
                            <TableCell className='bbottom bleft bright' align='center'>Nadun</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>Colony Future</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Kob</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Koben</TableCell>
                            <TableCell className='bbottom bleft bright' align='center'>Dunekta</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default VerbTense;