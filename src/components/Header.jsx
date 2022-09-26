import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom';
import './assets/Header.css';

export default function Header() {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                </Toolbar>
            </AppBar>
            <Stack spacing={2} direction="row" className='ContentMenu'>
                <Button className="menuButton" onClick={() => { navigate('/Create') }}>Maregráfica</Button>
                <Button className="menuButton" onClick={() => { navigate('/Create') }}>Fluviométrica</Button>
                <div style={{ display: 'flex', justifyContent: 'center', marginLeft: 890, position: 'absolute' }}>
                    <Button><SettingsIcon /></Button>
                    <Button><PowerSettingsNewIcon /></Button>
                </div>
            </Stack>
        </Box >
    );
}