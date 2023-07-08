import { Inter } from 'next/font/google'
import Link from 'next/link'
import { styled } from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export const HoverLink = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-size: 0.9375em;
	font-style: normal;
	line-height: 105%;
	font-family: ${inter.style.fontFamily};
	font-weight: 500;
	display: flex;
	gap: 0.5rem;
	align-items: center;
	height: 2.5rem;
`

export const HoverLinkContainer = styled.div`
	position: relative;
`
