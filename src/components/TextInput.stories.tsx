import { meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

export default {
	title: 'components/TextInput',
	component: TextInput.Root,
	args:{
		children:[
			
				<TextInput.Icon>
					<Envelope />
				</TextInput.Icon>,

				<TextInput.Input placeholder='Your Name' />
			],
			
	},
	argTypes:{
		children:{
			table:{
				disable: true,
			}
		},
	}
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithOutIcon: StoryObj<TextInputRootProps> = {
	args:{
		children: <TextInput.Input placeholder='Your Name' />
	},
	
}

