import { Story, Meta } from '@storybook/react/types-6-0'
import Episodes from '.'

export default {
  title: 'Episodes',
  component: Episodes
} as Meta

export const Basic: Story = (args) => <Episodes {...args} />
