import * as S from './styles'

export type CharacterCardProps = {
  id?: number
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
      <S.TextSpace title={name}>
        <S.TextLabel>Nome: </S.TextLabel>
        {name}
      </S.TextSpace>
      <S.TextSpace title={species}>
        <S.TextLabel>Espécie: </S.TextLabel>
        {species}
      </S.TextSpace>
      <S.TextSpace>
        <S.TextLabel>Status: </S.TextLabel>
        {status}
      </S.TextSpace>
    </S.DetailsCharacter>
  </S.Wrapper>
)

export default CharacterCard
