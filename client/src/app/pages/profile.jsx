import React from 'react'
import { Layout } from "../shared/components/"
import PrimarySearchAppBar from '../shared/components/appBar'
import CardCover from '@mui/joy/CardCover';
import profileImg from '../shared/assets/img/profileImg.png'
import anonimous from '../shared/assets/img/anonimous.png'
import { Box, Card, Typography } from '@mui/material';

import '@fontsource/roboto';

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
					marginTop: 18,
					marginLeft: '30%',
				}}>
					<Box display="flex" justifyContent="space-around" alignItems="center" >
						<Box>
							<img src={anonimous} style={{
								width: '150px',
								height: '150px',
							}} />
						</Box>
						<Box>
							<Typography ml={2} variant='h6'>
								Anonigay6969
							</Typography>
							<Typography ml={2} sx={{ width: 400 }} >
								Sempre fui meio gay, entao por isso posso dar o cu
							</Typography>
						</Box>
						<Box ml={'70%'} >
							<Typography mt={6} sx={{ width: 150 }}  >
								Jogos          5<br />
								Amigos         10<br />
								Comunidades    2<br />
								Consquistas    20<br />
							</Typography>
						</Box>
					</Box>
				</CardCover>
				<CardCover sx={{ width: 100, height: 100 }}>
					<Typography variant='h6' sx={{ width: 200 }} >
						Jogados Recentemente
					</Typography>
					<Box display="flex" justifyContent="space-around" alignItems="center" >
						<Box>

						</Box>
						<Box>

						</Box>
					</Box>
				</CardCover>
			</Card>
		</Layout >
	)
}
