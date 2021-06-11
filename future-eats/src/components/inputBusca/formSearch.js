import React from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {           
            width: '90vw',
            marginLeft:'20px',
            marginTop: '20px',
            marginBottom:'10px'           
        },
    },
   
}));

export default function FormPropsTextFields() {
    const classes = useStyles();
    return (        
            <form className={classes.root } noValidate autoComplete="off" >
                <TextField id="outlined-basic" placeholder="Restaurante" variant="outlined" fullWidth InputProps={{
                    startAdornment: (
                        <InputAdornment position="middle">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }} />
            </form>       
    )
}
