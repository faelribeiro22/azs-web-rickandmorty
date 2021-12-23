import { render, screen } from '@testing-library/react'
import CardEpisode from '.'

describe('<CardEpisode />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardEpisode />)
    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
