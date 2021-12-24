import { render, screen } from '@testing-library/react'
import EpisodeInfo from '.'

describe('<EpisodeInfo />', () => {
  it('should render the heading', () => {
    const { container } = render(<EpisodeInfo />)
    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
