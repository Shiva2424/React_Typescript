import React from 'react'
import {ThemeProvider, createTheme} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const theme = createTheme({
    palette : {
        mode: 'dark',
    }
})

type providerProps = {
    children: React.ReactNode
}

function AppProviders(props: providerProps) {
  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
    </ThemeProvider>
    </>
  )
}

export default AppProviders;