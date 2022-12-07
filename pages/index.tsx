import { Container, Heading, Card, CardHeader, CardBody, Text } from '@chakra-ui/react';

import { usePokemos } from "../hooks/usePokemons"

export default function Home() {
  const { pokemons } = usePokemos();

  return (
    <Container>
      <header>
        <Heading as='h1' m={6}>ポケモン図鑑</Heading>
      </header>
      
      {pokemons?.map(pokemon => (
        <Card key={pokemon.id} m={3}>
          <CardHeader pb={0}>
            <Heading as='h2' size='md'>{pokemon.name}</Heading>
          </CardHeader>
          <CardBody>
            <Text display="inline">たいぷ：</Text>
            {pokemon.types.map((type, index) => (
              <Text key={type} display="inline">
                {type}
                {index !== (pokemon.types.length - 1) && ', '}
              </Text>
            ))}
          </CardBody>
        </Card>
      ))}
    </Container>
  )
}
