import { meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
	title: 'components/Button',
	component: Button,
	args:{
		children: 'Create',
	}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

