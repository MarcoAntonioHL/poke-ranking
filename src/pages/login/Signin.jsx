import React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const Signin = () => {
	return (
		<>
			<Grid
				container
				spacing={1}
				direction="row"
				justifyContent="center"
				alignItems="center"
				alignContent="center"
				wrap="wrap"
			>
				<Grid item xs={4}>
					PokeRanking
				</Grid>
				<Divider orientation="vertical" flexItem />
				<Grid item xs={4}>
					signin
				</Grid>
			</Grid>
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField label="Outlined secondary" color="secondary" focused />
				<TextField
					label="Filled success"
					variant="filled"
					color="success"
					focused
				/>
				<TextField
					label="Standard warning"
					variant="standard"
					color="warning"
					focused
				/>
			</Box>
		</>
	);
};
