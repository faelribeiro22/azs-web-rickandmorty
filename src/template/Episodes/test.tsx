import { render, screen } from '@testing-library/react'
import Episodes from '.'

describe('<Episodes />', () => {
  it('should render the heading', () => {
    const { container } = render(<Episodes />)
    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
