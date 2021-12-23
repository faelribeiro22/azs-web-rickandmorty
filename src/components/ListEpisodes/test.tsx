import { render, screen } from '@testing-library/react'
import ListEpisodes from '.'

describe('<ListEpisodes />', () => {
  it('should render the heading', () => {
    const { container } = render(<ListEpisodes />)
    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
