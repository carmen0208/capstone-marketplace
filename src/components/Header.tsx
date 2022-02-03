
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useImxClientContext } from "../context/ImxClientContext";
import { Link } from 'react-router-dom';

const pages = ['Assets', 'Inventory', 'Transactions'];

const Header = () => {
  const { connectWallet, disConnectWallet, walletAddress } = useImxClientContext();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event: any) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleWalletConnect = async () => !!connectWallet && await connectWallet();
  const handleWalletDisconnect = () => !!disConnectWallet && disConnectWallet();


  useEffect(() => {
    console.log("context Changed", { connectWallet, disConnectWallet, walletAddress })
  }, [connectWallet, disConnectWallet, walletAddress]);


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            ImmutableX
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
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page.toLowerCase()}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            ImmutableX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Box
                key={page} 
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={page.toLowerCase()}>
                  <Typography textAlign="center">{page}</Typography>
                </Link>
              </Box>
            ))}
          </Box>

          {walletAddress
            ? <Box sx={{ flexGrow: 0 }}>
              <Button
                key='wallet'
                onClick={handleWalletDisconnect}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Disconnect to the Wallet
              </Button>
            </Box>
            : <Box sx={{ flexGrow: 0 }}>
              <Button
                key='wallet'
                onClick={handleWalletConnect}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Connect to the Wallet
              </Button>
            </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;