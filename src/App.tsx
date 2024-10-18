import * as React from 'react'

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import Typography from '@mui/material/Typography'
import Logo from './components/Logo'
import Box from '@mui/material/Box'

import type { Navigation, Router, Session } from '@toolpad/core'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { AppProvider } from '@toolpad/core/AppProvider'
import { createTheme } from '@mui/material/styles'

const navigation: Navigation = [
  {
    segment: 'water',
    title: 'Water',
    icon: <WaterDropIcon />,
  },
  {
    segment: 'gas',
    title: 'Gas',
    icon: <LocalFireDepartmentIcon />,
  },
  {
    segment: 'electricity',
    title: 'Electricity',
    icon: <ElectricBoltIcon />,
  },
]

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#2196f3',
        },
        background: {
          default: '#ffffff',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#2196f3',
        },
        background: {
          default: '#212121',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
})

function PageContent({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  )
}

export default function App() {
  const [session, setSession] = React.useState<Session | null>({
    user: {
      name: 'Levente',
      email: 'levente@noemail.com',
      image: 'https://avatars.githubusercontent.com/u/168279599?v=4',
    },
  })

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Levente',
            email: 'levente@noemail.com',
            image: 'https://avatars.githubusercontent.com/u/168279599?v=4',
          },
        })
      },
      signOut: () => {
        setSession(null)
      },
    }
  }, [])

  const [pathname, setPathname] = React.useState('/dashboard')

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: path => setPathname(String(path)),
    }
  }, [pathname])

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={navigation}
      router={router}
      theme={theme}
      branding={{
        logo: <Logo />,
        title: 'Consumptions',
      }}
    >
      <DashboardLayout>
        <PageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  )
}
