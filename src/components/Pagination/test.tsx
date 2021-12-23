import { render, screen } from '@testing-library/react'
import Pagination from '.'

describe('<Pagination />', () => {
  it('should render the heading', () => {
    const { container } = render(<Pagination />)
    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
