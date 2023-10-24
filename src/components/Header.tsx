import { useState} from "react";
import { Typography, AppBar, Toolbar, Box, Menu, MenuItem, IconButton, Tooltip, Avatar} from "@mui/material";
import { Adb, } from '@mui/icons-material';

export default function Header(){
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
    };

    return(
        <>
            <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography variant="h6"> MESSAGE EXPRESS </Typography>
                    
                    <Box sx={{ display: 'flex',  flexGrow: 1, justifyContent: 'end', alignItems: 'center', marginRight: 3}}>
                        <Typography sx={{ mr: 1}}>Salvador (Atendente)</Typography> 

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Opções">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Salvador" />
                            </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>      
    )
}

const settings =[ "Perfil", "Sair"]