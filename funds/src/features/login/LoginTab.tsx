// @ts-nocheck
import React from 'react';
import {Card, Grid} from '@material-ui/core';
import TextField from "@material-ui/core/TextField/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Button from "@material-ui/core/Button/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Avatar from "@material-ui/core/Avatar/Avatar";
import LockOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography/Typography";
import Link from "@material-ui/core/Link/Link";
import Box from "@material-ui/core/Box/Box";
import Container from "@material-ui/core/Container/Container";
import { sizing } from '@material-ui/system';
import {authenticate, authenticated} from "../common/auth/AuthAction";
import {connect} from "react-redux";
import PropTypes from "prop-types";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://nicolas2lee.github.io/">
                Nicolas2lee
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const styles  = (theme: { spacing: { unit: number; }; }) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class LoginTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.dispatch(authenticate(email.value, password.value))
    }

    linkState = key => {
        return event => {
            this.setState({
                [key]: event.target.value
            });
        };
    };

    render() {
        const { classes } = this.props;
        const { email, password } = this.state;


        return (
            <Box display="flex" justifyContent="center" width='1/4' >
                <Card>
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5" m={10}>
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={this.linkState('email')}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={this.linkState('password')}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <Button href="#" >
                                        {"Use facebook"}
                                       </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </Card>
            </Box>
        );
    }
}
LoginTab.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(withStyles(styles)(LoginTab));
