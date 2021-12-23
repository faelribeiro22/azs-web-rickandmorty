import { Story, Meta } from '@storybook/react/types-6-0'
import Pagination from '.'

export default {
  title: 'Pagination',
  component: Pagination
} as Meta

export const Basic: Story = (args) => <Pagination {...args} />

Basic.args = {
  count: 51,
  pages: 3,
  next: 3,
  prev: 1,
  sendNextPage: (next: number) => console.log('heyyy', next),
  sendPrevPage: (prev: number) => console.log('heyyy', prev)
}
