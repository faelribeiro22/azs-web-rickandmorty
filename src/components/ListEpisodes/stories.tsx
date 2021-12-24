import { Story, Meta } from '@storybook/react/types-6-0'
import ListEpisodes from '.'
import results from './results.json'

export default {
  title: 'ListEpisodes',
  component: ListEpisodes
} as Meta

export const Basic: Story = (args) => (
  <ListEpisodes episodes={[]} loading={false} {...args} />
)

Basic.args = {
  episodes: results.results,
  loading: false
}
