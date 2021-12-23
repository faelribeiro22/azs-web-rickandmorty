import { Story, Meta } from '@storybook/react/types-6-0'
import Search from '.'

export default {
  title: 'Search',
  component: Search
} as Meta

export const Basic: Story = (args) => <Search {...args} />

Basic.args = {
  sendSearch: (search: string) => console.log(search)
}
