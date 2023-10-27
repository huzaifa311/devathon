import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
    return (
        <Stack sx={{ color: 'grey.500', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} spacing={2} direction="row">
            <CircularProgress sx={{
                color: "rgb(15 118 110)",
                height: '400px',
                width: '400px',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center'
            }} />
        </Stack>
    );
}