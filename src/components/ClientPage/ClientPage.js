import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import './ClientPage.css'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    container: {
        // minWidth: 1000,
        maxWidth: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    input: {
        height: 2,
        padding: 24,
    },
    inputNotes: {
        // paddingBottom: 20,
    },
    textField: {
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit,
        marginBottom: -12,
    },
    dense: {
        marginTop: theme.spacing.unit,
    },
    menu: {
        width: 200,
    },
    button: {
        marginTop: 12,
        width: 120,
        float: 'right',
    },
});

class ClientPage extends Component {

    state = {
        // authorUserId: this.props.user.id,
        // communityId: this.props.user.community_id,
        companyName: '',
        location: '',
        address: '',
        contactName: '',
        contactTitle: '',
        contactEmail: '',
        contactPhone: '',
        notes: '',
    }


    // handles on inputs on form and sets state
    handleChange = (property) => (event) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        });
    }

    // handles form submit button, sends post dispatch to redux with payload of all selected form inputs + clears form 
    handleSubmit = () => {
        this.props.dispatch({ type: 'ADD_CLIENT', payload: this.state });
        this.setState({
            companyName: '',
            location: '',
            address: '',
            contactName: '',
            contactTitle: '',
            contactEmail: '',
            contactPhone: '',
            notes: '',
        });
    }

    render() {
        const { classes } = this.props;

        return (

            <div className={classes.root}>
                <form className={classes.container} Validate autoComplete="off" >
                    <Typography color="primary" style={{marginBottom: "-26px", fontWeight: "bold"}}><h2>Add Client</h2></Typography>
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                required
                                id="outlined-company-input"
                                label="Company Name"
                                className={classes.textField}
                                InputProps={{ classes: { input: classes.input } }}
                                fullWidth
                                type="text"
                                name="company name"
                                margin="normal"
                                variant="outlined"
                                value={this.state.companyName}
                                onChange={this.handleChange("companyName")}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                required
                                id="outlined-location-input"
                                label="LOCATION"
                                className={classes.textField}
                                InputProps={{ classes: { input: classes.input } }}
                                fullWidth
                                type="text"
                                name="location"
                                margin="normal"
                                variant="outlined"
                                value={this.state.location}
                                onChange={this.handleChange("location")}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                required
                                id="outlined-address-input"
                                label="Address"
                                className={classes.textField}
                                InputProps={{ classes: { input: classes.input } }}
                                fullWidth
                                type="text"
                                name="address"
                                margin="normal"
                                variant="outlined"
                                value={this.state.address}
                                onChange={this.handleChange("address")}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                required
                                id="outlined-contact-input"
                                label="Client Contact"
                                className={classes.textField}
                                InputProps={{ classes: { input: classes.input } }}
                                fullWidth
                                type="text"
                                name="client contact"
                                margin="normal"
                                variant="outlined"
                                value={this.state.contactName}
                                onChange={this.handleChange("contactName")}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                required
                                id="outlined-title-input"
                                label="Title"
                                className={classes.textField}
                                InputProps={{ classes: { input: classes.input } }}
                                fullWidth
                                type="text"
                                name="title"
                                margin="normal"
                                variant="outlined"
                                value={this.state.contactTitle}
                                onChange={this.handleChange("contactTitle")}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                required
                                id="outlined-email-input"
                                label="Email"
                                className={classes.textField}
                                InputProps={{ classes: { input: classes.input } }}
                                fullWidth
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                                value={this.state.contactEmail}
                                onChange={this.handleChange("contactEmail")}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                required
                                id="outlined-phone-input"
                                label="Phone"
                                className={classes.textField}
                                InputProps={{ classes: { input: classes.input } }}
                                fullWidth
                                type="tel"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                name="phone"
                                autoComplete="phone"
                                margin="normal"
                                variant="outlined"
                                value={this.state.contactPhone}
                                onChange={this.handleChange("contactPhone")}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                id="outlined-notes-input"
                                label="Notes"
                                multiline
                                rowsMax="6"
                                className={classes.textField}
                                InputProps={{ classes: { input: classes.inputNotes } }}
                                fullWidth
                                type="text"
                                name="notes"
                                margin="normal"
                                variant="outlined"
                                value={this.state.notes}
                                onChange={this.handleChange("notes")}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                className={classes.button}
                            >
                                Submit
                    </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;

}

export default withRouter(withStyles(styles)(connect(mapReduxStateToProps)(ClientPage)));

