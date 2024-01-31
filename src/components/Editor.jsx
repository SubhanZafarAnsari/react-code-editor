import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import {useState} from 'react'
import '../App.css'
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { Box, styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css');


function Editor({heading, icon, color, value, onChange}) {
    
    // const [open, setOpen] = useState(true)
    
    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    const Heading = styled(Box)`
        background: #1d1e22;
        display: flex;
        padding: 9px 12px;
    `;
    const Header = styled(Box)`
        display: flex;
        background: #060606;
        color: #AAAEBC;
        justify-content: space-between;
        font-weigth: 700;
    `
    const Container = styled(Box)`
        flex-grow: 1;
        flex-basic: 0;
        display: flex;
        flex-direction: column;
        padding: 0 8px 8px;
        height: 50vh;

    `
    return (
    <Container >
        <Header>
            <Heading>
                <Box 
                component="span"
                style={{
                    
                    background: color,
                    height: 20,
                    width: 20,
                    display: "flex",
                    placeContent: "center",
                    borderRadius: 5,
                    marginRight: 5,
                    paddingBottom: 2,
                    color: "#000",

                }}
                >{icon}</Box>
                {heading}
            </Heading>
            <CloseFullscreenIcon
                
            />
        </Header>
        <ControlledEditor className='controlled-editor'
            onBeforeChange={handleChange}
            value={value}
            options={{
                theme: 'material',
                lineNumbers: true
            }}
        />
    </Container>
  )
}

export default Editor;