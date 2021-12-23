import * as S from './styles'

export type CharacterCardProps = {
  name: string
  image: string
  status: string
  species: string
}

const CharacterCard = ({
  name,
  image,
  status,
  species
}: CharacterCardProps) => (
  <S.Wrapper>
    <S.Image src={image} alt={name} />
    <S.DetailsCharacter>
      <S.TextLabel>Nome: </S.TextLabel>
      {name}
      <br />
      <S.TextLabel>Espécie: </S.TextLabel>
      {species}
      <br />
      <S.TextLabel>Status: </S.TextLabel>
      {status}
      <br />
    </S.DetailsCharacter>
  </S.Wrapper>
)

export default CharacterCard
