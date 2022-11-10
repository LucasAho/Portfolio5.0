import { Container, Typography } from '@mui/material';
import Konva from 'konva';
import React, { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Circle } from 'react-konva';

import AppBar from '../AppBar/AppBar';
import Footer from '../Footer/Footer';

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
        <>
            <AppBar currentPage={'Wiki'} />
            <Container maxWidth='xl'>
                <Typography ref={containerRef} variant="h3">The Naked Eye Planets of Amondi-6</Typography>
                <Stage style={{ backgroundColor: 'black', overflow: 'hidden' }} width={screenWidth} height={screenHeight}>
                    <Layer>
                        {/* Sun // Amondi-6 */}
                        <Circle x={screenWidth / 2} y={(screenHeight / 2)} radius={75} fill="yellow" />
                        {/* Amondi-6c //  Halir */}
                        <Circle ref={halir} x={(screenWidth / 2) - 94} y={screenHeight / 2} distance={94} year={0.08} radius={5} fill="brown" />
                        {/* Amondi-6d // Hibakhla */}
                        <Circle ref={hibakhla} x={(screenWidth / 2) - 113} y={screenHeight / 2} distance={113} year={0.23} radius={7} fill="brown" />
                        {/* Amondi-6e // Hihaihli */}
                        <Circle ref={hihaihli} x={(screenWidth / 2) - 139} y={screenHeight / 2} distance={139} year={0.51} radius={9} fill="brown" />
                        {/* Amondi-6b // Relya // Maalima */}
                        <Circle ref={relya} x={(screenWidth / 2) - 173} y={screenHeight / 2} distance={173} year={0.97} radius={11} fill="green" />
                        {/* Amondi-6f // Himuta */}
                        <Circle ref={himuta} x={(screenWidth / 2) - 242} y={screenHeight / 2} distance={242} year={2.16} radius={10} fill="red" />
                        {/* Amondi-6k // Lis Nacatek */}
                        <Circle ref={nacatek} x={(screenWidth / 2) - 336} y={screenHeight / 2} distance={336} year={4.22} radius={3} fill="purple" />
                        {/* Amondi-6a // Radrog */}
                        <Circle ref={radrog} x={(screenWidth / 2) - 551} y={screenHeight / 2} distance={551} year={10.39} radius={25} fill="orange" />
                    </Layer>
                </Stage>
            </Container>
            <Footer />
        </>
    );
};

export default Planets;