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
				<Grid item xs={12}>
					PokeRanking
				</Grid>
				<Divider orientation="vertical" flexItem />
				<Grid item xs={12}>
					signin
				</Grid>
				<Grid item xs={12}>
					<TextField label="Outlined secondary" color="secondary" focused />
				</Grid>
				<Grid item xs={12}>
					<TextField label="Outlined secondary" color="secondary" focused />
				</Grid>
			</Grid>
		</>
	);
};
