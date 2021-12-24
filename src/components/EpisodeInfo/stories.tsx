import { Story, Meta } from '@storybook/react/types-6-0'
import EpisodeInfo from '.'

export default {
  title: 'EpisodeInfo',
  component: EpisodeInfo
} as Meta

export const Basic: Story = (args) => <EpisodeInfo {...args} />
