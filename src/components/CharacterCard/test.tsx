import { render, screen } from '@testing-library/react'
import CharacterCard from '.'

describe('<CharacterCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<CharacterCard />)
    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
