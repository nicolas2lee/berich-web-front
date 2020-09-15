// @ts-nocheck
import React from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import {CssBaseline, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {closeMenu, menuSelected, openMenu, selectMenuWidget} from "./DashboardAction";
import EnhancedTable from "../fund/EnhancedTable";

const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

class Dashboard extends React.Component {

    componentDidMount() {
        const { selectedWidget, dispatch } = this.props;
        dispatch(selectMenuWidget(selectedWidget))
    }

    render() {
        const { classes, theme, open, menu, selectedWidget, funds, loading, error, dispatch } = this.props;

        const handleDrawerOpen = () => {
            dispatch(openMenu())
        };

        const handleDrawerClose = () => {
            dispatch(closeMenu())
        };

        function handleMenuClick(e, menuElement) {
            console.log(menuElement)
            dispatch(selectMenuWidget(menuElement))
        }

        var detailComponent;
        if (error) {
            detailComponent = <div>Error! {error.message}</div>
        } else if (loading) {
            detailComponent = <div>Loading...</div>
        } else {
            detailComponent = <EnhancedTable funds={funds} />
        }

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            My dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {menu.map((menuElement, index) => (
                            <ListItem button key={menuElement.label}
                                      value={menuElement}
                                      onClick={(e)=> handleMenuClick(e, menuElement)}
                                      selected={selectedWidget===menuElement}
                            >
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={menuElement.label} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <main className={clsx(classes.content, {[classes.contentShift]: open })}>
                    <div className={classes.drawerHeader} />
                    {detailComponent}
                </main>
            </div>
        );
    }
}

Dashboard.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    open: state.dashboardReducer.open,
    menu: state.dashboardReducer.menu,
    selectedWidget: state.dashboardReducer.selectedWidget,
    funds: state.dashboardReducer.funds,
    loading: state.dashboardReducer.loading,
    error: state.dashboardReducer.error
});

export default connect(
    mapStateToProps,
)(withStyles(styles, { withTheme: true })(Dashboard));
