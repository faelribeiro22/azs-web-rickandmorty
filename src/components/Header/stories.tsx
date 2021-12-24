import { Story, Meta } from '@storybook/react/types-6-0'
import Header from '.'

export default {
  title: 'Header',
  component: Header
} as Meta

export const Basic: Story = (args) => (
  <Header
    search={function (): void {
      throw new Error('Function not implemented.')
    }}
    clear={function (): void {
      throw new Error('Function not implemented.')
    }}
    getFavoritesEpisodes={function (): void {
      throw new Error('Function not implemented.')
    }}
    {...args}
  />
)
