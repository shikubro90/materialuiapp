import React from 'react'
import {AppBar, Toolbar, Typography, InputBase, alpha, Avatar} from '@mui/material/'
import {makeStyles} from '@mui/styles'
import { Search } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail'
import Badge from '@mui/material/Badge'
import Notification from '@mui/icons-material/Notifications'
import avatar from '../img/avatar.png'


const  useStyles = makeStyles(theme=>(
    {

        toolbar :{
            display : 'flex', 
            justifyContent : 'space-between'
        },
        logoLg : {
            
            display : 'none',
            [theme.breakpoints.up('sm')] : {
                display : 'block'
            }
        },
        logoSm : {
            display : 'block',
            [theme.breakpoints.up('sm')] :{
                display : 'none'
            }
        },
        search : {
            display : "flex",
            alignItems : "center", 
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
            },

            borderRadius : theme.shape.borderRadius,
            padding : 5,
            color: "white",
            width : '50%',
            [theme.breakpoints.down('sm')] : {
                display : 'none'
            }
        }, 

        input : {
            color : "white",
            marginLeft : theme.spacing(2)
        }, 

        icons : {
            display : 'flex',
            alignItems : 'center',
        }, 

        badge : {
            marginRight : theme.spacing(2)
        },

        searchButton : {
            color : '#fff',
            [theme.breakpoints.up('sm')]: {
                display : 'none'
            }
        }

    }
))

const NavBar = () => {

    const classes = useStyles()

  return (
    <div>
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h3' className={classes.logoLg} >
                    Nav Bar
                </Typography>

                <Typography variant='h5' className={classes.logoSm}>
                    Nav Bar
                </Typography>


                <div className={classes.search}>
                    <Search/>
                    <InputBase placeholder='Search...'  className={classes.input}/>
                </div>

                <Search className={classes.searchButton}/>


                <div className={classes.icons}>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <MailIcon/>
                    </Badge>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Notification/>
                    </Badge>
                    <Avatar  alt='avatar' src={avatar} />
                </div>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar
