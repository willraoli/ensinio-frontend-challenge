import Link from 'next/link'
import styled from 'styled-components'

export const DropdownMenu = styled.div`
	position: absolute;
	top: 2.5rem;
	left: 50%;
	transform: translateX(-50%);
	padding: 2.75rem 3rem;
	background-color: #fff;
	border-radius: 0.375rem;
	width: 40rem;
`
export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-flow: row;
	margin-top: 1.75rem;
`

export const GridItem = styled(Link)`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	border-radius: 0.5rem;
	text-decoration: none;

	&:hover {
		background: linear-gradient(90deg, #f5f3fd 0%, #fbfafe 100%);
	}
`

export const GridItemTitle = styled.div`
	color: #130c25;
	font-size: 0.9375rem;
	font-style: normal;
	font-weight: 600;
	line-height: 125%;
	letter-spacing: 0.00469rem;
`

export const GridItemDescription = styled.div`
	color: #423d51;
	font-size: 0.8125rem;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
`

export const SolutionsHeading = styled.div`
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 105%;
	letter-spacing: 0.13125rem;
	text-transform: uppercase;
	color: #5f41d9;
`
