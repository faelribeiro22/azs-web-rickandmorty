import { Story, Meta } from '@storybook/react/types-6-0'
import CardEpisode from '.'

export default {
  title: 'CardEpisode',
  component: CardEpisode
} as Meta

export const Basic: Story = (args) => (
  <CardEpisode
    id={0}
    name={''}
    episode={''}
    air_date={''}
    characters={[]}
    {...args}
  />
)

Basic.args = {
  id: 1,
  name: 'Pilot',
  episode: 'S01E01',
  air_date: 'December 2, 2013',
  characters: [
    {
      name: 'Rick Sanchez'
    },
    {
      name: 'Morty Smith'
    },
    {
      name: 'Bepisian'
    },
    {
      name: 'Beth Smith'
    }
  ]
}
