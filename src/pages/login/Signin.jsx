import React from 'react'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

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
    </>
  )
}
