import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

import Header from '../../Header';

import './style.css';

const baseURL = 'https://63234f04362b0d4e7de1284e.mockapi.io/cadastro';

export default function Create() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState();
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [fuso, setFuso] = useState();
  const [local, setLocal] = useState('');
  const [tabua, setTabua] = useState('');
  const [inst, setInst] = useState('');
  const [dataref, setDataRef] = useState();
  const [iddatgeo, setIdDatGeo] = useState();
  const [emedloc, setEMedLoc] = useState();
  const [emedibge, setEMedIbge] = useState();

  const Postar = () => {
      axios.post(baseURL, {
          nome,
          numero,
          lat,
          lon,
          fuso,
          local,
          tabua,
          inst,
          dataref,
          iddatgeo,
          emedloc,
          emedibge
      })
          .then(() => {
              console.log('Funcionou')
          }).catch(() => {
              console.log('Deu Erradooo')
          })
  }


  return (
    <div>
      <Header />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 4 }}>

        <Paper elevation={2} sx={{ height: 550, opacity: 0.7 }}>
          <div style={{ marginTop: 80, opacity: 1 }}>
            <TextField
              label="Código"
              id="outlined-start-adornment"
              type='number'
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              sx={{ m: 1, width: '12ch', backgroundColor: 'rgba(217, 217, 217, 0.16)' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">Cód:</InputAdornment>,
              }}
            />

            <TextField
              label="Nome da Estação"
              id="outlined-start-adornment"
              type='text'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              sx={{ m: 1, width: '25ch', backgroundColor: 'rgba(217, 217, 217, 0.16)' }}
            />


            <TextField
              label="Latitude"
              type='number'
              id="outlined-start-adornment"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              sx={{ m: 1, width: '25ch', backgroundColor: 'rgba(217, 217, 217, 0.16)' }}
            />


            <TextField
              label="Longitude"
              id="outlined-start-adornment"
              type='number'
              value={lon}
              onChange={(e) => setLon(e.target.value)}
              sx={{ m: 1, width: '25ch', backgroundColor: 'rgba(217, 217, 217, 0.16)' }}
            />

            <TextField
              label="Fuso"
              id="outlined-start-adornment"
              type='text'
              value={fuso}
              onChange={(e) => setFuso(e.target.value)}
              sx={{ m: 1, width: '15ch', backgroundColor: 'rgba(217, 217, 217, 0.16)' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">GMT</InputAdornment>,
              }}
            />

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 4 }}>
              <TextField
                label="Local"
                id="outlined-start-adornment"
                type='text'
                value={local}
                onChange={(e) => setLocal(e.target.value)}
                sx={{ m: 1, width: '39ch', backgroundColor: 'rgba(217, 217, 217, 0.16)' }}
              />

              <TextField
                label="Tábua"
                id="outlined-start-adornment"
                type='bool'
                value={tabua}
                onChange={(e) => setTabua(e.target.value)}
                sx={{ m: 1, width: '15ch', backgroundColor: 'rgba(217, 217, 217, 0.16)' }}
              />

              <TextField
                label="Instituição"
                id="outlined-start-adornment"
                type='text'
                value={inst}
                onChange={(e) => setInst(e.target.value)}
                sx={{ m: 1, width: '25ch', backgroundColor: 'rgba(217, 217, 217, 0.16)' }}
              />

              <TextField
                id="outlined-number"
                label="Data Ref. Datum"
                type="date"
                value={dataref}
                onChange={(e) => setDataRef(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ m: 1, width: '15ch', backgroundColor: 'rgba(217, 217, 217, 0.16)' }}
              />

            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 4 }}>
              <TextField
                label="Id. Nível Datum Geo."
                id="outlined-start-adornment"
                type='text'
                value={iddatgeo}
                onChange={(e) => setIdDatGeo(e.target.value)}
                sx={{ m: 1, width: '18ch', backgroundColor: 'rgba(217, 217, 217, 0.16)' }}
              />

              <TextField
                label="Elev. Nível M. Mar Local"
                id="outlined-start-adornment"
                type='number'
                value={emedloc}
                onChange={(e) => setEMedLoc(e.target.value)}
                sx={{ m: 1, width: '15ch', backgroundColor: 'rgba(217, 217, 217, 0.16)' }}
              />

              <TextField
                label="Elev. Nível M. Mar IBGE"
                id="outlined-start-adornment"
                type='number'
                value={emedibge}
                onChange={(e) => setEMedIbge(e.target.value)}
                sx={{ m: 1, width: '18ch', backgroundColor: 'rgba(217, 217, 217, 0.16)' }}
              />

            </Box>

            <Stack spacing={2} direction="row" sx={{flex: 'center', justifyContent: 'flex-end', marginTop: 10, marginRight: 5}}>
              <Button variant="contained" color="error">Cancelar</Button>
              <Button variant="contained" color="success" onClick={Postar}>Adicionar</Button>
            </Stack>
          </div>
        </Paper>
      </Box>
    </div>
  );
}
