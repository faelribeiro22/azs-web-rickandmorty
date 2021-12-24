import { render, screen } from '@testing-library/react'
import Episode from '.'

describe('<Episode />', () => {
  it('should render the heading', () => {
    const { container } = render(<Episode />)
    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
