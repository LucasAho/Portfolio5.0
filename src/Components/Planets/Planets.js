import { Container, Table, TableCell, TableContainer, TableHead, TableBody, TableRow, Typography, Paper } from '@mui/material';
import Konva from 'konva';
import React, { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Circle } from 'react-konva';

const Planets = () => {
    const [screenWidth, setWidth] = useState();
    const [screenHeight, setHeight] = useState();
    Konva.showWarnings = false;
    const containerRef = useRef();

    const halir = useRef();
    const hibakhla = useRef();
    const hihaihli = useRef();
    const relya = useRef();
    const himuta = useRef();
    const nacatek = useRef();
    const radrog = useRef();

    useEffect(() => {
        setWidth(containerRef.current.clientWidth);
        setHeight(containerRef.current.clientWidth);
    }, []);

    const getContainerSize = () => {
        const newWidth = containerRef.current.clientWidth;
        setWidth(newWidth);
        setHeight(newWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", getContainerSize);
    }, []);
    useEffect(() => {
        const nodes = [halir, hibakhla, hihaihli, relya, himuta, nacatek, radrog];
        nodes.forEach(node => {
            const anim = new Konva.Animation((frame) => {
                const centerX = screenWidth / 2;
                const centerY = screenHeight / 2;
                const radius = node.current.attrs.distance;
                node.current.x(centerX + radius * Math.cos(frame.time / (5000 * node.current.attrs.year)));
                node.current.y(centerY + radius * Math.sin(frame.time / (5000 * node.current.attrs.year)));
            }, [node.current.getLayer()]);
            anim.start();
        });

    }, [screenWidth, screenHeight]);
    return (
        <Container>
            <Typography ref={containerRef} variant="h3">Amondi-6 Solar System</Typography>
            <Typography variant="body1">The host star of the planet Amondi-6b was named Amondi-6 by the humans who discovered and inhabited it. In total, 11 planets were discovered orbiting this star. The star and 6b were selected for their similarities to humanity's own Sun and Earth, in order to reduce operating costs on the planet.</Typography>


            <Typography variant="body1">Only 6 of the 11 planets have been discovered by the inhabitants of Maalima. Each culture has its own names and beliefs around these planets. Many rohīren believe that the 6 planets were scultped and placed by Radren, as reminders of the 6 pillars. As such, each planet is named after its corresponding pillar. The moon is their guiding light through the pillars.</Typography>
            <TableContainer style={{ marginBottom: '1rem' }} component={Paper}>
                <Table size='small'>
                    <TableHead>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft ' scope="col">Planet #</TableCell>
                            <TableCell className='bleft' align='center' scope="col"><strong>Human Name</strong></TableCell>
                            <TableCell className='bleft' align='center' scope="col"><strong>Rohīren Name</strong></TableCell>
                            <TableCell className='bleft bright' align='center' scope="col"><strong>Hanatu Name</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row">1</TableCell>
                            <TableCell className='bleft' align='center'>Amondi-6c</TableCell>
                            <TableCell className='bleft' align='center'>Halir</TableCell>
                            <TableCell className='bleft bright' align='center'>-</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row">2</TableCell>
                            <TableCell className='bleft' align='center'>Amondi-6d</TableCell>
                            <TableCell className='bleft' align='center'>Hibakhla</TableCell>
                            <TableCell className='bleft bright' align='center'>-</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row">3</TableCell>
                            <TableCell className='bleft' align='center'>Amondi-6e</TableCell>
                            <TableCell className='bleft' align='center'>Hihaihli</TableCell>
                            <TableCell className='bleft bright' align='center'>-</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row">4</TableCell>
                            <TableCell className='bleft' align='center'>Amondi-6b</TableCell>
                            <TableCell className='bleft' align='center'>Relya</TableCell>
                            <TableCell className='bleft bright' align='center'>Maalima</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row">5</TableCell>
                            <TableCell className='bleft' align='center'>Amondi-6f</TableCell>
                            <TableCell className='bleft' align='center'>Himuta</TableCell>
                            <TableCell className='bleft bright' align='center'>-</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row">6</TableCell>
                            <TableCell className='bleft' align='center'>Amondi-6o</TableCell>
                            <TableCell className='bleft' align='center'>Lis Nacātek</TableCell>
                            <TableCell className='bleft bright' align='center'>-</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row">7</TableCell>
                            <TableCell className='bleft' align='center'>Amondi-6a</TableCell>
                            <TableCell className='bleft' align='center'>Radrog</TableCell>
                            <TableCell className='bleft bright' align='center'>-</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row">8</TableCell>
                            <TableCell className='bleft' align='center'>Amondi-6k</TableCell>
                            <TableCell className='bleft' align='center'>-</TableCell>
                            <TableCell className='bleft bright' align='center'>-</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row">9</TableCell>
                            <TableCell className='bleft' align='center'>Amondi-6l</TableCell>
                            <TableCell className='bleft' align='center'>-</TableCell>
                            <TableCell className='bleft bright' align='center'>-</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row">10</TableCell>
                            <TableCell className='bleft' align='center'>Amondi-6m</TableCell>
                            <TableCell className='bleft' align='center'>-</TableCell>
                            <TableCell className='bleft bright' align='center'>-</TableCell>
                        </TableRow>
                        <TableRow className='bbottom btop'>
                            <TableCell className='bleft' component='th' scope="row">11</TableCell>
                            <TableCell className='bleft' align='center'>Amondi-6n</TableCell>
                            <TableCell className='bleft' align='center'>-</TableCell>
                            <TableCell className='bleft bright' align='center'>-</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant="h4">The Naked Eye Planets of Amondi-6</Typography>
            <Typography variant="caption">Distance and orbital period are to scale. Planet/star size is not.</Typography>
            <Stage style={{ backgroundColor: 'black', overflow: 'hidden' }} width={screenWidth} height={screenHeight}>
                <Layer>
                    {/* Sun // Amondi-6 */}
                    <Circle x={screenWidth / 2} y={(screenHeight / 2)} radius={50} fill="GoldenRod" />
                    {/* Amondi-6c //  Halir */}
                    <Circle ref={halir} x={(screenWidth / 2) - 19} y={screenHeight / 2} distance={94} year={0.08} radius={4} fill="SlateBlue" />
                    {/* Amondi-6d // Hibakhla */}
                    <Circle ref={hibakhla} x={(screenWidth / 2) - 38} y={screenHeight / 2} distance={113} year={0.23} radius={7} fill="SaddleBrown" />
                    {/* Amondi-6e // Hihaihli */}
                    <Circle ref={hihaihli} x={(screenWidth / 2) - 64} y={screenHeight / 2} distance={139} year={0.51} radius={9} fill="brown" />
                    {/* Amondi-6b // Relya // Maalima */}
                    <Circle ref={relya} x={(screenWidth / 2) - 98} y={screenHeight / 2} distance={173} year={0.97} radius={11} fill="green" />
                    {/* Amondi-6f // Himuta */}
                    <Circle ref={himuta} x={(screenWidth / 2) - 167} y={screenHeight / 2} distance={242} year={2.16} radius={10} fill="Maroon" />
                    {/* Amondi-6k // Lis Nacatek */}
                    <Circle ref={nacatek} x={(screenWidth / 2) - 261} y={screenHeight / 2} distance={336} year={4.22} radius={3} fill="purple" />
                    {/* Amondi-6a // Radrog */}
                    <Circle ref={radrog} x={(screenWidth / 2) - 476} y={screenHeight / 2} distance={551} year={10.39} radius={25} fill="orange" />
                </Layer>
            </Stage>
        </Container>
    );
};

export default Planets;