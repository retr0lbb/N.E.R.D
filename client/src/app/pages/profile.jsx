import React from 'react'
import { Layout } from "../shared/components/"
import PrimarySearchAppBar from '../shared/components/appBar'
import CardCover from '@mui/joy/CardCover';
import profileImg from '../shared/assets/img/profileImg.png'
import anonimous from '../shared/assets/img/anonimous.png'
import { Box, Card } from '@mui/material';

export default function Profile() {
	return (
		<Layout>
			<Card sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<CardCover sx={{
					width: ' 100vw',
				}}>
					<PrimarySearchAppBar />
					<img src={profileImg} style={{ height: '20vh', width: '100vw', paddingTop: 5 }} />
				</CardCover>
				<CardCover sx={{
					width: '170px',
					height: '170px',
					marginTop: 15,
					marginLeft: 10
				}}>
					<Box >
						<img src={anonimous} style={{
							width: '150px',
							height: '150px',
						}} />
					</Box>
				</CardCover>
			</Card>
		</Layout >
	)
}
