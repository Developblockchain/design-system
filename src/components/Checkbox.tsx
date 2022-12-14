import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps {}


export function Checkbox({} : CheckboxProps){

	return(
		<CheckboxPrimitive.Root className='h-6 w-6 p-[2px] bg-gray-800 rounded'>
			<CheckboxPrimitive.Indicator asChild>
				<Check className='h-5 w-5 text-cyan-500 font-bold' />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	)
}