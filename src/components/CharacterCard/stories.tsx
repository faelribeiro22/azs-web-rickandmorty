import { Story, Meta } from '@storybook/react/types-6-0'
import CharacterCard from '.'

export default {
  title: 'CharacterCard',
  component: CharacterCard
} as Meta

export const Basic: Story = (args) => (
  <CharacterCard name={''} image={''} status={''} species={''} {...args} />
)

Basic.args = {
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  status: 'Alive',
  species: 'Human'
}
