import { Story, Meta } from '@storybook/react/types-6-0'
import Search from '.'

export default {
  title: 'Search',
  component: Search
} as Meta

export const Basic: Story = (args) => (
  <Search
    sendSearch={function (): void {
      throw new Error('Function not implemented.')
    }}
    {...args}
  />
)

Basic.args = {
  sendSearch: (search: string) => console.log(search)
}
