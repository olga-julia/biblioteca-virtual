import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const TextButton = styled(Button)({
  backgroundColor: 'transparent',
  textTransform: 'none',
  fontFamily:'Poppins, sans-serif',
  fontSize:20,
  color: '#595959',
  '&:hover': {
    color: 'black',
    backgroundColor: '#F7F5F3'
  },
});

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" padding={1}>
      <TextButton variant="text">Cadastrar</TextButton>
      <TextButton variant="text">Lista completa</TextButton>
      <TextButton variant="text">Cadastrar</TextButton>
      <TextButton variant="text">Lista completa</TextButton> 
      <TextButton variant="text">Cadastrar</TextButton>
               
    </Stack>
  );
}
