import { meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
	title: 'components/heading',
	component: Heading,
	args:{
		children: 'Lorem ipsum.',
		size: 'lg',
	}
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const ComponentCustom: StoryObj<HeadingProps> = {
	args:{
		asChild: true,
		children:(
			<h1>Heading</h1>
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