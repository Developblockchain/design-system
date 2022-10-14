import { meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
	title: 'components/text',
	component: Text,
	args:{
		children: 'Lorem ipsum.',
		size: 'lg',
	}
} as Meta

export const Default: StoryObj<TextProps> = {}

export const ComponentCustom: StoryObj<TextProps> = {
	args:{
		asChild: true,
		children:(
			<p>Testando</p>
		)
	},
	argTypes:{
		children:{
			table:{
				disable: true,
			}
		},
		asChild:{
			table:{
				disable: true,
			}
		}
	}
}