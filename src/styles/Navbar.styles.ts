import { Inter } from 'next/font/google'
import Link from 'next/link'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export const Navbar = styled.header`
	background: rgba(0, 0, 0, 0.03);
	backdrop-filter: blur(15px);
	height: 5.5rem;
	position: fixed;
	display: flex;
	align-items: center;
	width: 100%;
`

export const Separator = styled.div`
	width: 0.0625rem;
	height: 1.5rem;
	opacity: 0.25;
	margin-right: 0.5rem;
	margin-left: 0.5rem;
	background: #99f3f5;
`

export const NavLink = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-size: 0.9375em;
	font-style: normal;
	font-family: ${inter.style.fontFamily};
	font-weight: 500;
	line-height: 105%;
`

export const NavbarWrapper = styled.nav`
	margin-right: 7rem;
	margin-left: 7rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`

export const Navigation = styled.div`
	display: flex;
	gap: 2.5rem;
	align-items: center;
`
