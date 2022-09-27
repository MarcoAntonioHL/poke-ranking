import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const Signin = () => {
	return (
		<>
			<Grid
				columns={20}
				container
				spacing={1}
				direction="row"
				justifyContent="center"
				alignItems="center"
				alignContent="center"
				wrap="wrap"
			>
				<Grid item xs={4}>
					<Grid
						container
						spacing={1}
						direction="row"
						justifyContent="center"
						alignItems="center"
						alignContent="center"
						wrap="wrap"
						sx={{
							marginTop: 20,
						}}
					>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Email"
								color="secondary"
								size="small"
								focused
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Password"
								color="secondary"
								size="small"
								focused
							/>
						</Grid>
						<Grid item xs={12}>
							<Button fullWidth variant="contained" color="secondary">
								<Link to="/signup">ingresar</Link>
							</Button>
						</Grid>
						<Grid item xs={12}>
							<Button fullWidth variant="contained" color="secondary">
								Registrarse
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
