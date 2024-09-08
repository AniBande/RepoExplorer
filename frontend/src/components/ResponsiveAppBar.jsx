import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useAuthContext } from "../context/AuthContext";
import Logout from "./Logout";





const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {

    const { authUser } = useAuthContext();



    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to='/' className='flex justify-center'>
                            <img className='h-8' src='/github.svg' alt='Github Logo' />
                        </Link>
                        GITHUB
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                '& .MuiPaper-root': {
                                    backgroundColor: '#3b82f6',
                                },
                            }}
                        >


                            <MenuItem onClick={handleCloseNavMenu} className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'>
                                <Typography textAlign="center" component={Link} to='/' sx={{ color: 'black', display: 'block', width: '100%' }}>
                                    Home
                                </Typography>
                            </MenuItem>




                            {!authUser && (
                                <MenuItem onClick={handleCloseNavMenu} className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'>
                                    <Typography textAlign="center" component={Link} to='/login' sx={{ color: 'black', display: 'block', width: '100%' }}>
                                        Login
                                    </Typography>
                                </MenuItem>
                            )}

                            {!authUser && (
                                <MenuItem onClick={handleCloseNavMenu} className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'>
                                    <Typography textAlign="center" component={Link} to='/signup' sx={{ color: 'black', display: 'block', width: '100%' }}>
                                        Signup
                                    </Typography>
                                </MenuItem>
                            )}




                            {authUser && (
                                <MenuItem onClick={handleCloseNavMenu} className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'>
                                    <Typography textAlign="center" component={Link} to='/likes' sx={{ color: 'black', display: 'block', width: '100%' }}>
                                        Likes
                                    </Typography>
                                </MenuItem>
                            )}


                            {authUser && (
                                <MenuItem onClick={handleCloseNavMenu} className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'>
                                    <Typography textAlign="center" component={Link} to='/explore' sx={{ color: 'black', display: 'block', width: '100%' }}>
                                        Explore
                                    </Typography>
                                </MenuItem>
                            )}


                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    > <Link to='/' className='flex justify-center'>
                            <img className='h-8' src='/github.svg' alt='Github Logo' />
                        </Link>
                        Github
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button
                            component={Link}
                            to="/"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button>

                        {authUser && (
                            <Button
                                component={Link}
                                to="/login"
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >

                                <Link
                                    to='/likes'
                                    className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
                                >
                                    Likes
                                </Link>

                            </Button>
                        )}

                        {authUser && (
                            <Button
                                component={Link}
                                to="/login"
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >

                                <Link
                                    to='/explore'
                                    className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
                                >
                                    Explore
                                </Link>
                            </Button>
                        )}

                        {!authUser && (
                            <Button
                                component={Link}
                                to="/login"
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >

                                <Link
                                    to='/login'
                                    className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
                                >
                                    Login
                                </Link>
                            </Button>
                        )}


                        {!authUser && (
                            <Button
                                component={Link}
                                to="/login"
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >

                                <Link
                                    to='/signup'
                                    className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
                                >
                                    SignUp
                                </Link>
                            </Button>
                        )}


                        {/* <Button
                            component={Link}
                            to="/login"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Login
                        </Button>
                        <Button
                            component={Link}
                            to="/signup"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Sign Up
                        </Button> */}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {authUser && (
                            <div className='flex flex-col gap-2 mt-auto'>
                                <Logout />
                            </div>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
