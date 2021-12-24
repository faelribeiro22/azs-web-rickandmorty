import * as S from './styles'

export type PaginationProps = {
  next?: number
  prev?: number
  sendNextPage: (page: number) => void
  sendPrevPage: (page: number) => void
}

const Pagination = ({
  next,
  prev,
  sendNextPage,
  sendPrevPage
}: PaginationProps) => (
  <S.Wrapper>
    <div>
      {prev && <S.Button onClick={() => sendPrevPage(prev)}>Anterior</S.Button>}
    </div>
    <div>
      {next && <S.Button onClick={() => sendNextPage(next)}>Próximo</S.Button>}
    </div>
  </S.Wrapper>
)

export default Pagination
