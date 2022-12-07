import { useQuery, gql } from "@apollo/client";

import { Pokemons } from '../types/Pokemon'

const Query = gql`
  query Pokemons {
    pokemons(first: 151) {
      id
      name
      types
    }
  }
`

export const usePokemos = () => {
  const { data, loading, error } = useQuery<Pokemons>(Query);
  const pokemons = data?.pokemons;

  return {
    pokemons,
    loading,
    error  
  };
}