/* eslint-disable  @typescript-eslint/no-explicit-any */
import * as S from './styles'
import CharacterCard, { CharacterCardProps } from '../CharacterCard'

const ListCharacter = (characters: any) => (
  <S.Wrapper>
    {characters.characters &&
      characters.characters.map((character: CharacterCardProps) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
          status={character.status}
          species={character.species}
        />
      ))}
  </S.Wrapper>
)

export default ListCharacter
