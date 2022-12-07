import { useQuery, gql } from "@apollo/client";

const Query = gql`
  query Pokemons {
    pokemons(first: 100) {
      name
    }
  }
`

export const usePokemos = () => {
  const { data, loading, error } = useQuery(Query);

  return {
    data,
    loading,
    error  
  };
}