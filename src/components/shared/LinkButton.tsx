import * as S from '@/styles/shared/LinkButton.styles'
import { LinkButtonVariantProps } from '@/styles/shared/LinkButton.styles'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

interface LinkButtonProps extends PropsWithChildren, LinkButtonVariantProps {
	icon?: string
	href: string
}

export default function LinkButton(props: LinkButtonProps) {
	return (
		<S.LinkButton
			$variant={props.$variant}
			href={props.href}
		>
			{props.icon && (
				<Image
					src={props.icon}
					alt='Icon'
				/>
			)}
			{props.children}
		</S.LinkButton>
	)
}
