import HoverLink from '@/components/shared/HoverLink'
import logo from 'public/logo.svg'
import user from 'public/icons/user.svg'
import Image from 'next/image'
import * as S from '@/styles/Navbar.styles'
import Link from 'next/link'
import LinkButton from '@/components/shared/LinkButton'
import SolutionsDropdown from './SolutionsDropddown'
import LocalizationDropdown from './LocalizationDropdown'

export default function Navbar() {
	const NAV_ITEMS = [
		{
			label: 'Preços',
			href: '/',
		},
		{
			label: 'Academy',
			href: '/',
		},
		{
			label: 'Blog',
			href: '/',
		},
		{
			label: 'Contato',
			href: '/',
		},
	]

	return (
		<S.Navbar>
			<S.NavbarWrapper>
				<Link href='/'>
					<Image
						src={logo}
						alt='Logo da página'
					/>
				</Link>
				<S.Navigation>
					<HoverLink
						icon
						showOnHover={<SolutionsDropdown />}
					>
						Soluções
					</HoverLink>
					{NAV_ITEMS.map((item, idx) => (
						<S.NavLink
							href={item.href}
							key={idx}
						>
							{item.label}
						</S.NavLink>
					))}
					<S.Separator />
					<LinkButton
						href='/'
						icon={user}
					>
						Entrar
					</LinkButton>
					<LinkButton
						href='/'
						$variant='outlined'
					>
						Começar agora
					</LinkButton>
					<HoverLink
						icon
						showOnHover={<LocalizationDropdown />}
					>
						PT
					</HoverLink>
				</S.Navigation>
			</S.NavbarWrapper>
		</S.Navbar>
	)
}
