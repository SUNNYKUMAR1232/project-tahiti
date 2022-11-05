import React from 'react';
import Image from 'next/dist/client/image';

// libraries
import { Grid, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import makeStyles from '@mui/styles/makeStyles';

//placeholder
import { INFO } from '../../assets/placeholder/healthAndEmergencyInfo';

//image
import map from '../../assets/images/contact/map.png';
import DropDownCard from '../widgets/DropDownCard';

const Info = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.dropdownWrapper}>
        {INFO.dropdown.map((item1, key) => (
          <DropDownCard title={item1.title} key={key}>
            <Grid container>
              {item1.content.map((item, key) => (
                <Grid
                  item
                  xs={12}
                  md={3}
                  key={key}
                  className={classes.dropdownDetails}
                >
                  {item.name && (
                    <Typography
                      variant='body1'
                      className={classes.dropdownTypography}
                    >
                      Name: {item.name}
                    </Typography>
                  )}
                  {item.room && (
                    <Typography
                      variant='body1'
                      className={classes.dropdownTypography}
                    >
                      Room: {item.room}
                    </Typography>
                  )}
                  {item.day && (
                    <Typography
                      variant='body1'
                      className={classes.dropdownTypography}
                    >
                      Visiting Day: {item.day}
                    </Typography>
                  )}
                  {item.designation && (
                    <Typography
                      variant='body1'
                      className={classes.dropdownTypography}
                    >
                      Designation: {item.designation}
                    </Typography>
                  )}
                  {item.phone && (
                    <Typography
                      variant='body1'
                      className={classes.dropdownTypography}
                    >
                      <CallIcon className={classes.phoneIcon} />
                      {item.phone}
                    </Typography>
                  )}
                </Grid>
              ))}
            </Grid>
          </DropDownCard>
        ))}
      </div>
      <Grid container spacing={4}>
        {INFO.location.map((place, key) => (
          <Grid item xs={12} md={6} key={key}>
            <div className={classes.locationWrapper}>
              <Grid container justifyContent='center'>
                <Grid item xs={6}>
                  <Typography variant='h3' className={classes.locationTitle}>
                    {place.title}
                  </Typography>
                  <Typography variant='body1' className={classes.location}>
                    {place.location1}
                  </Typography>
                  <Typography variant='body1' className={classes.location}>
                    {place.location2}
                  </Typography>
                  <Typography variant='body1' className={classes.location}>
                    {place.location3}
                  </Typography>
                  <Typography variant='body1' className={classes.location}>
                    {place.location4}
                  </Typography>
                  <Typography variant='body1' className={classes.location}>
                    {place.pin}
                  </Typography>
                </Grid>
                <Grid item xs={6} className={classes.mapWrapper}>
                  <Image
                    src={map}
                    alt='Monday Morning'
                    className={classes.map}
                  />
                  <a
                    href='https://goo.gl/maps/EKwq5J2x1djPHwVB9'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Typography variant='body2' className={classes.mapText}>
                      See on map
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Info;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: '1200px',
    margin: '40px auto 0px auto',
    [theme.breakpoints.down('lg')]: {
      marginTop: '24px',
      padding: '0px 24px 0px 24px',
    },
  },
  dropdownWrapper: {
    marginBottom: '20px',
  },

  // caption: {
  //   color: theme.palette.secondary.neutral60,
  //   lineHeight: '24px',
  // },

  dropdownDetails: {
    paddingTop: '18px',
    paddingBottom: '18px',
  },

  dropdownTypography: {
    fontSize: '18px',
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
  },

  phoneIcon: {
    marginRight: '8px',
    fontSize: '1.3rem',
    verticalAlign: 'middle',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      marginRight: '4px',
    },
  },

  locationWrapper: {
    marginTop: '18px',
    padding: '18px 0px 24px 24px',
    boxShadow: theme.shadows[0],
    borderRadius: '8px',
  },
  locationTitle: {
    paddingBottom: '12px',
    fontSize: '22px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '22px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '22px',
    },
  },
  mapWrapper: {
    justifyItems: 'center',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '16px',
    },
  },
  map: {
    width: '174px',
    height: '155px',
    paddingTop: '4px',
    marginLeft: '16px',
    [theme.breakpoints.down('lg')]: {
      width: '114px',
      height: '101px',
    },
  },
  mapText: {
    color: theme.palette.common.black,
    paddingTop: '12px',
    paddingRight: '16px',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: '18px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '13px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8px',
      paddingRight: '4px',
    },
  },
  location: {
    fontFamily: theme.typography.fontFamily,
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
}));
