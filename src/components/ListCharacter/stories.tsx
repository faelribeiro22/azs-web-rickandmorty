import { Story, Meta } from '@storybook/react/types-6-0'
import ListCharacter from '.'
import charactersMock from './characters.json'

export default {
  title: 'ListCharacter',
  component: ListCharacter
} as Meta

export const Basic: Story = (args) => <ListCharacter {...args} />

const { characters } = charactersMock

Basic.args = {
  characters: characters
}
