import { render, screen } from '@testing-library/react'
import ListCharacter from '.'

describe('<ListCharacter />', () => {
  it('should render the heading', () => {
    const { container } = render(<ListCharacter />)
    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
