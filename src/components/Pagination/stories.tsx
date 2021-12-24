import { Story, Meta } from '@storybook/react/types-6-0'
import Pagination from '.'

export default {
  title: 'Pagination',
  component: Pagination
} as Meta

export const Basic: Story = (args) => (
  <Pagination
    sendNextPage={(next: number) => console.log('heyyy', next)}
    sendPrevPage={(prev: number) => console.log('heyyy', prev)}
    {...args}
  />
)

Basic.args = {
  next: 3,
  prev: 1
}
