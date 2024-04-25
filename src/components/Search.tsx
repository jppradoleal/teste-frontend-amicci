import { FormEventHandler } from "react"

interface SearchProps {
  onSubmit: FormEventHandler
}

export function Search ({ onSubmit }: Readonly<SearchProps>) {
  return <form onSubmit={onSubmit}>
    <input type="search" />
    <button>Consultar</button>
    <button>Minha localização</button>
  </form>
}
