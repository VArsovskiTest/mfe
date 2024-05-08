import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { CardContent, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 function Album() {
    const useStyles = makeStyles((theme) => ({
        '@global': {
            a: {
                textDecoration: 'none'
            }
        },
        icon: {
            marginRight: theme.spacing(2),
        },
        heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(4, 0, 3),
        },
        cardGrid: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4)
        },
        card: {
            width: '100%',
            display: 'flex'
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6)
        }
    }));
    
    const classes = useStyles();

    return (
        <React.Fragment>
            <main>
                {/* HeroUnit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                        >
                            Home page
                        </Typography>
                        <Typography
                        variant="h3"
                        align="center"
                        color="textSecondary"
                        paragraph
                        >
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    </Typography>
                    <Typography
                        variant="h3"
                        align="center"
                        color="textSecondary"
                        paragraph
                        >
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
                    </Typography>
                    <Typography
                        variant="h3"
                        align="center"
                        color="textSecondary"
                        paragraph
                        >
    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Link to="/pricing">
                                    <Button variant="contained">Pricing</Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/pricing">
                                    <Button variant="outlined">
                                        Pricing
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                    </Container>
                    <Container className={classes.cardGrid}>
                        {cards.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.CardMedia}
                                        image="https://picsum.photos/200/300"
                                        title="ImageTitle"
                                    />
                                    <CardContent className={classes.cardContent}></CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography gutterBottom variant="h5">
                                        This is media card.
                                    </Typography>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Container>
                </div>
            </main>
        </React.Fragment>
    )
}

function HeroContent() {
    const useStyles = makeStyles((theme) => ({
        '@global': {
            a: {
                textDecoration: 'none'
            }
        },
        icon: {
            marginRight: theme.spacing(2),
        },
        heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6),
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8)
        },
        card: {
            width: '100%',
            display: 'flex'
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6)
        }
    }));
    
    const classes = useStyles();
    
        return (
        <React.Fragment>
            <main>
                <div className={classes.heroContent}>
                    <Container>
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        ></Typography>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    )
}

export default () => {
    return (
        <React.Fragment>
            <HeroContent/>
            <Album/>
        </React.Fragment>
    )
}
