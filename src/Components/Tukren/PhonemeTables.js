import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import './VoS.css';

const PhonemeTables = () => {
    return (
        <Grid container spacing={1}>
            <Grid item lg={7}>
                <TableContainer style={{ backgroundColor: '#AFA8BA' }} component={Paper}>
                    <Table size='small'>
                        <TableHead>
                            <TableRow className='bbottom btop' >
                                <TableCell scope="col"> </TableCell>
                                <TableCell className='bleft ' align='center' colSpan={2} scope="col">Labial</TableCell>
                                <TableCell className='bleft' align='center' colSpan={2} scope="col">Alveolar</TableCell>
                                <TableCell className='bleft' align='center' colSpan={2} scope="col">Palatal</TableCell>
                                <TableCell className='bleft' align='center' scope="col">Velar</TableCell>
                                <TableCell className='bleft' align='center' colSpan={2} scope="col">Uvular</TableCell>
                                <TableCell className='bleft bright' align='center' scope="col">Guttural</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className='bbottom btop'>
                                <TableCell className='bleft' component='th' scope="row">Plosive</TableCell>
                                <TableCell className='bleft' align='center'>b</TableCell>
                                <TableCell align='center'>p</TableCell>
                                <TableCell className='bleft' align='center'>t</TableCell>
                                <TableCell align='center'>d</TableCell>
                                <TableCell className='bleft' align='center'>c</TableCell>
                                <TableCell align='center'>kd/ɟ/</TableCell>
                                <TableCell className='bleft' align='center'>k</TableCell>
                                <TableCell className='bleft' align='center'>q</TableCell>
                                <TableCell align='center'>g/ɢ/</TableCell>
                                <TableCell className='bleft bright'></TableCell>
                            </TableRow>
                            <TableRow className='bbottom btop'>
                                <TableCell className='bleft' component='th' scope="row">Nasal</TableCell>
                                <TableCell className='bleft' align='center' colSpan={2}>m</TableCell>
                                <TableCell className='bleft' align='center' colSpan={2}>n</TableCell>
                                <TableCell className='bleft' colSpan={2}></TableCell>
                                <TableCell className='bleft' ></TableCell>
                                <TableCell className='bleft' colSpan={2}></TableCell>
                                <TableCell className='bleft bright'></TableCell>
                            </TableRow>
                            <TableRow className='bbottom btop'>
                                <TableCell className='bleft' component='th' scope="row">Fricative</TableCell>
                                <TableCell className='bleft' align="center" colSpan={2}>f</TableCell>
                                <TableCell className='bleft' align="center" >s</TableCell>
                                <TableCell align="center" >z</TableCell>
                                <TableCell className='bleft' align="center" colSpan={2}></TableCell>
                                <TableCell className='bleft' align="center" ></TableCell>
                                <TableCell className='bleft' align="center" colSpan={2}></TableCell>
                                <TableCell className='bleft bright' align="center" >h</TableCell>
                            </TableRow>
                            <TableRow className='bbottom btop'>
                                <TableCell className='bleft' component='th' scope="row">Lat. Fricative</TableCell>
                                <TableCell className='bleft' colSpan={2}></TableCell>
                                <TableCell className='bleft' align="center" >hl/ɬ/</TableCell>
                                <TableCell align="center" >zl/ɮ/</TableCell>
                                <TableCell className='bleft' colSpan={2}></TableCell>
                                <TableCell className='bleft'></TableCell>
                                <TableCell className='bleft' colSpan={2}></TableCell>
                                <TableCell className='bleft bright'></TableCell>
                            </TableRow>
                            <TableRow className='bbottom btop'>
                                <TableCell className='bleft' component='th' scope="row">Liquid</TableCell>
                                <TableCell className='bleft' colSpan={2}></TableCell>
                                <TableCell className='bleft' align='center'>l</TableCell>
                                <TableCell align='center'>r/ɹ/</TableCell>
                                <TableCell className='bleft' align='center' colSpan={2}>j</TableCell>
                                <TableCell className='bleft' align='center'>w</TableCell>
                                <TableCell className='bleft' colSpan={2}></TableCell>
                                <TableCell className='bleft bright'></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item lg={5}>
                <TableContainer style={{ backgroundColor: '#AFA8BA' }} component={Paper}>
                    <Table size='small'>
                        <TableHead>
                            <TableRow className='bbottom btop'>
                                <TableCell scope="col"> </TableCell>
                                <TableCell className='bleft' align='center' colSpan={4} scope="col">Front</TableCell>
                                <TableCell className='bleft' align='center' colSpan={4} scope="col">Central</TableCell>
                                <TableCell className='bleft bright' align='center' colSpan={4} scope="col">Back</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className='bbottom btop'>
                                <TableCell className='bleft' component='th' scope="row">High</TableCell>
                                <TableCell className='bleft' align='center'>i</TableCell>
                                <TableCell align='center'>ī/i:/</TableCell>
                                <TableCell className='bleft' align='center' colSpan={2}></TableCell>
                                <TableCell className='bleft' align='center' colSpan={4}></TableCell>
                                <TableCell className='bleft' align='center'>uh/ɯ/</TableCell>
                                <TableCell align='center'>ūh/ɯ:/</TableCell>
                                <TableCell className='bleft' align='center'>u</TableCell>
                                <TableCell className='bbottom bright' align='center'>ū/u:/</TableCell>
                            </TableRow>
                            <TableRow className='bbottom btop'>
                                <TableCell className='bleft' component='th' scope="row">Middle</TableCell>
                                <TableCell className='bleft' colSpan={2} align='center'></TableCell>
                                <TableCell className='bleft' align='center'>e/ø/</TableCell>
                                <TableCell className='' align='center'>eh/ø:/</TableCell>
                                <TableCell className='bleft' align='center' colSpan={4}></TableCell>
                                <TableCell className='bleft' align='center' colSpan={2}></TableCell>
                                <TableCell className='bleft' align='center'>o</TableCell>
                                <TableCell className='bbottom bright' align='center'>ō/o:/</TableCell>
                            </TableRow>
                            <TableRow className='bbottom btop'>
                                <TableCell className='bleft' component='th' scope="row">Low</TableCell>
                                <TableCell className='bleft' align='center' colSpan={4}></TableCell>
                                <TableCell className='bleft' align='center' colSpan={2}>a</TableCell>
                                <TableCell align='center' colSpan={2}>ā/a:/</TableCell>
                                <TableCell className='bleft bright' align='center' colSpan={4}></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default PhonemeTables;

