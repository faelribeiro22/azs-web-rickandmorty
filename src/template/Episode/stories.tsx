import { Story, Meta } from '@storybook/react/types-6-0'
import Episode from '.'

export default {
  title: 'Episode',
  component: Episode
} as Meta

export const Basic: Story = (args) => <Episode {...args} />
