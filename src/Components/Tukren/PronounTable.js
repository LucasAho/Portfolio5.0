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
                        <TableRow>
                            <TableCell className='bbottom' scope="col"><strong>POV</strong></TableCell>
                            <TableCell className='bleft btop bbottom' align='center' scope="col"><strong>Nom.</strong></TableCell>
                            <TableCell className='bleft btop bbottom' align='center' scope="col"><strong>Acc.</strong></TableCell>
                            <TableCell className='bleft btop bbottom bright' align='center' scope="col"><strong>Poss.</strong></TableCell>
                            <TableCell className='bleft btop bbottom bright' align='center' scope="col"><strong>Gen.</strong></TableCell>
                            <TableCell className='bleft btop bbottom bright' align='center' scope="col"><strong>Reflex.</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>1</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Y</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Yo</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Yani</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Fuyo</TableCell>
                            <TableCell className='bbottom bleft bright' align='center'>Yarwon</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>2</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Bos</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Bul</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Boni</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Foben</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Rabon</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>3F</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Fi</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Fim</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Fimi</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Fufami</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Rafin</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>3M</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Fo</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Fom</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Fomi</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Fufoma</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Rafon</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>3N</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Sen</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Selt</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Sani</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Fensi</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Rafeim</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>1Co</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Kai</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Kaiz</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Kaizli</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Fukai</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Rakahl</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>2Co</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Bi</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Biz</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Bizi</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Fubiza</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Rafu</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className='bleft bbottom btop' component='th' scope="row"><strong>3Co</strong></TableCell>
                            <TableCell className='bleft bbottom' align='center'>Ned</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Neida</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Nedi</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Funol</TableCell>
                            <TableCell className='bbottom bleft' align='center'>Rafna</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PronounTable;