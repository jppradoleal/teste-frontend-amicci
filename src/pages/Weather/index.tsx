import { FormEvent } from "react";
import { Search } from "../../components/Search";

export function Weather() {
  function onSubmit(e: FormEvent) {
    e.preventDefault()

    console.log("Submit weather")
  }

  return <main>
    <Search onSubmit={onSubmit} />
  </main>
}
