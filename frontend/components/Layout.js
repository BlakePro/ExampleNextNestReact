import Head from 'next/head';
import Link from 'next/link';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import StoreIcon from '@material-ui/icons/Store';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default function Navbar(props){
  return (
    <div>
      <style jsx global>{`
        body{
            margin: 0px;
            padding: 0px;
            overflow-x:hidden!important;
        }
        .dataTables_wrapper{
          padding:10px;
        }
        .form-control{
          height:48px;
        }
        .btn-block{
          width:100%;
        }
        #candidato{
          padding:10px;
        }
       `}</style>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={4}>
               <Link href="/"><Button variant="text" color="inherit" startIcon={<StoreIcon />}>Store</Button></Link>
            </Grid>
            <Grid item xs={4} >
              <Typography variant="h5" align="center">
                {props.title}
              </Typography>
            </Grid>
            <Grid item xs={4} align="right" >
              <Link href="candidato"><Button variant="text" color="inherit" startIcon={<AssignmentIndIcon />}>Nombre Candidato</Button></Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
