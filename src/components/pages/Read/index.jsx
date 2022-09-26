import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from "axios";

import './style.css';

import Header from '../../Header';
import Tabela from './Table';

const baseURL = "https://63234f04362b0d4e7de1284e.mockapi.io/cadastro";

export default function Read() {

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <Header />
      <br />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 1100,
            height: 550,
          },
        }}
      >
        <Paper elevation={3} style={{ display: 'flex', justifyContent: 'space-between' }}>

          <Tabela />

          {/* <Box sx={{display: 'flex', justifyContent: 'center'}}>
            {post.map((element, item) => {
              return (
                <div key={item}>
                  <h1>{element.nome}</h1>
                  <p>{element.numero}</p>
                </div>
              );
            })}
          </Box> */}

          
        </Paper>
      </Box>
    </div>
  );
}