import { FormEventHandler } from "react"
import { useStore } from "../store"

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
    <input type="search" placeholder="Jacareí, SP, Brasil" value={address || ''} onChange={(e) => setAddress(e.target.value)} />
    <button type="submit">Consultar</button>
    <button onClick={loadAddress} type="button">Minha localização</button>
  </form>
}
