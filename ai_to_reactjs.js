import React, { useState, useEffect, useRef } from 'react';
import { Box, makeStyles, Button, createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
export default AiToReact;
const bg = require('./img/bg.png');
const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '#root': {
                    width: '100%'
                },

                body: {
                    background: `url(${bg}) no-repeat center/cover`,
                    padding: 0,
                    minWidth: '800px',
                    margin: 'auto',
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                ul: {
                    margin: 0,
                    padding: 0,
                    listStyle: 'none'
                },
                h1: {
                    fontSize: '3.5rem',
                    lineHeight: '19px',
                    textTransform: 'uppercase'
                },
                p: {
                    lineHeight: '23px'
                }
            }
        }
    }
})

const useStyle = makeStyles({
    'wrapper': {
        width: '90%',
        minHeight: '90vh',
        margin: 'auto',
        padding: '2rem',
        background: `url(${require('./img/inner.png')}) no-repeat center/cover`,
        '& nav': {
            '& ul': {
                display: 'flex',
                alignItems: 'center',
                '& li:nth-of-type(2)': {
                    marginLeft: 'auto'
                },
                '& a': {
                    margin: 0,
                    padding: '5px 10px',
                    display: 'inline-block',
                    color: '#fff',
                    textDecoration: 'none'
                },
                '& input.search': {
                    width: '110px',
                    background: '#8FA5FF',
                    borderRadius: '50px',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    padding: '4px',
                    paddingLeft: '25px',
                    display: 'inline-block',
                    '&::placeholder': {
                        color: '#fff',
                    }
                },
                '& .search_list i': {
                    position: 'absolute',
                    left: '6px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#6886FF'
                }
            }
        },
        '& .social_icon a': {
            textDecoration: 'none',
            display: 'inline-flex',
            width: '35px',
            height: '35px',
            marginRight: '8px',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            boxShadow: '0 1px 2px #555',
            borderRadius: '50%',
            transition: '.5s',
            '&:hover': {
                boxShadow: '0 3px 6px #222'
            }
        }
    }
})


function AiToReact() {
    useEffect(()=> {
        document.title = 'AI TO HTML CONVERT BY NIKHILROY';
    })
    const classes = useStyle();
    const navItem = [
        {
            id: 1,
            name: <Box component="strong" fontSize="18px"> Logo Here </Box>
        },
        {
            id: 2,
            name: 'Home',
        },
        {
            id: 3,
            name: 'News'
        },
        {
            id: 4,
            name: 'About Us'
        },
        {
            id: 5,
            name: 'Contact'
        }
    ]
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline></CssBaseline>
                <Box className={classes.wrapper}>
                    <Box component="nav" px=".5rem">
                        <ul>
                            {
                                navItem.map(v => (
                                    <li key={v.id}> <a href="#"> {v.name}</a> </li>
                                ))
                            }
                            <Box component="li" position="relative"
                             className="search_list"> <input className="search" type="search" />
                                <i className="fas fa-search    "></i>
                            </Box>
                        </ul>
                    </Box>
                    <Box>
                        <Box color="#fff" padding="1rem">
                            <h1>Covid-19</h1>
                            <h1>Rapid Test</h1>
                            <Box maxWidth="400px" component="p">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita, neque perferendis reiciendis beatae sed! Sapiente labore, aut id earum fugit dolore hic incidunt non.
                   </Box>
                        </Box>
                        <Box padding="1rem" className="social_icon">
                            <a href="#">
                                <i className="fab fa-instagram    "></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-linkedin    "></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-facebook    "></i>
                            </a>
                        </Box>

                    </Box>
                </Box>



            </ThemeProvider>

        </React.Fragment>
    )
}