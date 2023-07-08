import * as S from '@/styles/Hero.styles'
import LinkButton from '@/components/shared/LinkButton'
import musicAudioPlay from 'public/icons/music-audio-play.svg'

export default function Hero() {
	return (
		<S.Hero>
			<S.HeroCTA>
				<S.PlatformDescription>Plataforma All In One</S.PlatformDescription>
				<S.Heading>Sua escola online poderosa e lucrativa</S.Heading>
				<S.Subheading>
					Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce
					e sistema EAD completo.
				</S.Subheading>
				<S.ButtonsContainer>
					<LinkButton
						href='/'
						$variant='filled'
					>
						Começar agora
					</LinkButton>
					<LinkButton
						href='/'
						icon={musicAudioPlay}
					>
						Ver vídeo
					</LinkButton>
				</S.ButtonsContainer>
			</S.HeroCTA>
		</S.Hero>
	)
}
