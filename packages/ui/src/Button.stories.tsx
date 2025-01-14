import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';

export default {
	title: 'UI/Button',
	component: Button,
	argTypes: {},
	parameters: {
		backgrounds: {
			default: 'dark'
		}
	},
	args: {
		children: 'Button'
	}
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	variant: 'default'
};

export const Primary = Template.bind({});
Primary.args = {
	variant: 'accent'
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
	variant: 'accent',
	size: 'sm'
};
