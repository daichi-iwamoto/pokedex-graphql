import { usePokemos } from "../hooks/usePokemons"

export default function Home() {
  const {data} = usePokemos();
  console.log(data);

  return (
    <div>
      test
    </div>
  )
}
