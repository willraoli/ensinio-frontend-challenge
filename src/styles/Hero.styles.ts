import styled from 'styled-components'

export const Hero = styled.section`
	background: linear-gradient(228deg, #5f41d9 100%, #41b5d9 0%); // fallback
	/* prettier-ignore */
	background-image: 
		url(${'./doodles/icon-playlists.svg'}), 
		url(${'./doodles/icon-certified.svg'}),
		url(${'./doodles/icon-playlists-2.svg'}), 
		url(${'./doodles/icon-transcription.svg'}),
		url(${'./doodles/icon-playlists-3.svg'}), 
		url(${'./images/dude.png'}),
		url(${'./doodles/dots.svg'}),
		url(${'./doodles/dots-2.svg'}),
		url(${'./doodles/circle.svg'}),
		linear-gradient(132deg, #5f41d9 0%, #41b5d9 100%);
	background-repeat: no-repeat;
	/* prettier-ignore */
	background-position: 
		left 1.88rem top 1.69rem, 
		left 37.44rem top 3.81rem, 
		left 20rem top, 
		right 25.52rem top 0.65rem, 
		right 0.91rem top 1.56rem, 
		right 10.44rem bottom,
		right 36.87rem bottom 5.37rem,
		right 16.31rem bottom 15.31rem,
		right 7.03rem bottom,
		center;
	height: 43.75rem;
`

export const HeroCTA = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.75rem;
	padding-top: 12.3rem;
	margin-right: 7rem;
	margin-left: 7rem;
`

export const PlatformDescription = styled.div`
	display: flex;
	gap: 1rem;
	text-transform: uppercase;
	align-items: center;
	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	line-height: 105%;
	letter-spacing: 0.15rem;
	color: #fff;

	&::before {
		content: url('./icons/music-audio-devices.svg');
	}
`

export const Heading = styled.div`
	width: 31.1875rem;
	color: #fff;
	font-size: 2.75rem;
	font-style: normal;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -0.0825rem;
`

export const Subheading = styled.div`
	width: 26rem;
	color: #fff;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
`

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 2.5rem;
	margin-top: 0.5rem;
`
