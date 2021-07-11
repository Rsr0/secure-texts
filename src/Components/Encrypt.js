import { Box,Button,Container, Divider } from '@material-ui/core';
import React,{ useState } from "react";
import TextEditor from './TextEditor';
import Comparison from './Comparison';

const Encrypt = ({isDecode,handleDecodeEl,setPage}) => {
    
    const [rawText,setRawText] = useState('');

    function textHandler(event) {
        setRawText(event);
      }

    return (
        <>
        <Box p={4} >
        <TextEditor textHandler={textHandler}/>
        </Box>
        <Container maxWidth="md">
            <Comparison rawText={rawText} isDecode={isDecode} />
            <Divider />
            <Button fullWidth style={{marginTop: '4em',height: '4rem'}} variant="contained"
            color={isDecode ? "secondary" : "primary"} 
            onClick={()=> {handleDecodeEl(!isDecode)
            setPage(isDecode ? ' Encoder' : ' Decoder')
            }}
            >
                Move to 
                {isDecode ? ' Encoder' : ' Decoder'}
            </Button>
        </Container>
        </>
    );
}

export default Encrypt;