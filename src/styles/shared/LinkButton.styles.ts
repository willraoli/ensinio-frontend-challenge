import { Inter } from 'next/font/google'
import Link from 'next/link'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

const paddingHelper = {
	outlined: '0.75rem 1.5rem',
	filled: '1.12rem 2rem',
}

export interface LinkButtonVariantProps {
	$variant?: 'outlined' | 'filled'
}

export const LinkButton = styled(Link)<LinkButtonVariantProps>`
	border-radius: 5rem;
	border: ${props => (props.$variant === 'outlined' ? '1px solid #fff' : 'none')};
	background: ${props => (props.$variant === 'filled' ? '#00E1E7' : 'none')};
	padding: ${props => (props.$variant ? paddingHelper[props.$variant] : 'none')};
	font-family: ${inter.style.fontFamily};
	font-weight: 600;
	color: ${props => (props.$variant === 'filled' ? '#130C25' : '#fff')};
	display: flex;
	gap: 0.5rem;
	align-items: center;
	text-decoration: none;
`
