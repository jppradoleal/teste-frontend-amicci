import { Button, Stack, TextField, Typography } from '@mui/material'
import { FormEventHandler } from 'react'
import { useStore } from '../store'

interface SearchProps {
  onSubmit: FormEventHandler
}

export function Search({ onSubmit }: Readonly<SearchProps>) {
  const { loadAddress, address, setAddress } = useStore(state => ({
    loadAddress: state.loadAddress,
    address: state.address,
    setAddress: state.setAddress
  }))

  return <form onSubmit={onSubmit}>
    <Stack gap={2} alignItems='center'>
      <TextField
        type='search'
        placeholder='Jacareí, SP, Brasil'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        fullWidth
      />
      <Button type='submit' variant='contained' fullWidth sx={{ py: 1, px: 2 }}>
        <Typography>Consultar</Typography>
      </Button>
      <Button onClick={loadAddress} type='button' variant='contained' color='warning' size='small' sx={{ py: 1, px: 2 }}>
        <Typography variant='body2'>
          Minha localização
        </Typography>
      </Button>
    </Stack>
  </form>
}
