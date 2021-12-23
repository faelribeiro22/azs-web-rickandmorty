import { Story, Meta } from '@storybook/react/types-6-0'
import EmptyState from '.'

export default {
  title: 'EmptyState',
  component: EmptyState
} as Meta

export const Basic: Story = (args) => <EmptyState {...args} />
