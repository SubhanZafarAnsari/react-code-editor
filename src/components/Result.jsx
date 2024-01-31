import { Box, styled } from "@mui/material";
import {useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
    height: 41vh;
`


function Result() {
    
    // const [src, setSrc] = useState("") 

    const {html,css, js} = useContext(DataContext);

    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `
    // useEffect(() => {
    //     const timeout = setTimeout(()=> {
    //         setSrc = {srcCode}
    //     }, 1000)
    //     return () => clearTimeout();
    // }, [html, css, js])


// <h1 class="first">Hello</h1>
/*
    .first{
        font-size: 90px;
        color: red;
    }
*/
    return (
    <Container>
        <iframe 
            srcDoc={srcCode}
            title="Output"
            sandbox="allow-scripts"
            frameBorder={0}
            width="100%"
            height="100%"
        />
    </Container>
  )
}

export default Result