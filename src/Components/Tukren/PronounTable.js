import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import './VoS.css';
const PronounTable = () => {
    return (
        <div>
            <TableContainer style={{ backgroundColor: '#AFA8BA' }} component={Paper}>
                <Table size='small'>
                    <TableHead>
                        <TableRow className='bbottom btop'>
                            <TableCell scope="col"><strong>POV</strong></TableCell>
                            <TableCell className='bleft' align='center' scope="col"><strong>Nom.</strong></TableCell>
                            <TableCell className='bleft' align='center' scope="col"><strong>Acc.</strong></TableCell>
                            <TableCell className='bleft bright' align='center' scope="col"><strong>Poss.</strong></TableCell>
                            <TableCell className='bleft bright' align='center' scope="col"><strong>Gen.</strong></TableCell>
                            <TableCell className='bleft bright' align='center' scope="col"><strong>Reflex.</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row"><strong>1</strong></TableCell>
                            <TableCell className='bleft' align='center'>Y</TableCell>
                            <TableCell className='bleft' align='center'>Yo</TableCell>
                            <TableCell className='bleft' align='center'>Yani</TableCell>
                            <TableCell className='bleft' align='center'>Fuyo</TableCell>
                            <TableCell className='bleft bright' align='center'>Yarwon</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row"><strong>2</strong></TableCell>
                            <TableCell className='bleft' align='center'>Bos</TableCell>
                            <TableCell className='bleft' align='center'>Bul</TableCell>
                            <TableCell className='bleft' align='center'>Boni</TableCell>
                            <TableCell className='bleft' align='center'>Foben</TableCell>
                            <TableCell className='bleft' align='center'>Rabon</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row"><strong>3F</strong></TableCell>
                            <TableCell className='bleft' align='center'>Fi</TableCell>
                            <TableCell className='bleft' align='center'>Fim</TableCell>
                            <TableCell className='bleft' align='center'>Fimi</TableCell>
                            <TableCell className='bleft' align='center'>Fufami</TableCell>
                            <TableCell className='bleft' align='center'>Rafin</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row"><strong>3M</strong></TableCell>
                            <TableCell className='bleft' align='center'>Fo</TableCell>
                            <TableCell className='bleft' align='center'>Fom</TableCell>
                            <TableCell className='bleft' align='center'>Fomi</TableCell>
                            <TableCell className='bleft' align='center'>Fufoma</TableCell>
                            <TableCell className='bleft' align='center'>Rafon</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row"><strong>3N</strong></TableCell>
                            <TableCell className='bleft' align='center'>Sen</TableCell>
                            <TableCell className='bleft' align='center'>Selt</TableCell>
                            <TableCell className='bleft' align='center'>Sani</TableCell>
                            <TableCell className='bleft' align='center'>Fensi</TableCell>
                            <TableCell className='bleft' align='center'>Rafeim</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row"><strong>1Co</strong></TableCell>
                            <TableCell className='bleft' align='center'>Kai</TableCell>
                            <TableCell className='bleft' align='center'>Kaiz</TableCell>
                            <TableCell className='bleft' align='center'>Kaizli</TableCell>
                            <TableCell className='bleft' align='center'>Fukai</TableCell>
                            <TableCell className='bleft' align='center'>Rakahl</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row"><strong>2Co</strong></TableCell>
                            <TableCell className='bleft' align='center'>Bi</TableCell>
                            <TableCell className='bleft' align='center'>Biz</TableCell>
                            <TableCell className='bleft' align='center'>Bizi</TableCell>
                            <TableCell className='bleft' align='center'>Fubiza</TableCell>
                            <TableCell className='bleft' align='center'>Rafu</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row"><strong>3Co</strong></TableCell>
                            <TableCell className='bleft' align='center'>Ned</TableCell>
                            <TableCell className='bleft' align='center'>Neida</TableCell>
                            <TableCell className='bleft' align='center'>Nedi</TableCell>
                            <TableCell className='bleft' align='center'>Funol</TableCell>
                            <TableCell className='bleft' align='center'>Rafna</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PronounTable;