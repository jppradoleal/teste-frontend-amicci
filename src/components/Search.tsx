import { FormEventHandler } from "react"
import { useStore } from "../store"

interface SearchProps {
  onSubmit: FormEventHandler
}

export function Search ({ onSubmit }: Readonly<SearchProps>) {
  const loadAddress = useStore(state => state.loadAddress)

  return <form onSubmit={onSubmit}>
    <input type="search" />
    <button type="submit">Consultar</button>
    <button onClick={loadAddress} type="button">Minha localização</button>
  </form>
}
