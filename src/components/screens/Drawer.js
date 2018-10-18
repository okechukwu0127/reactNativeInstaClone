import React , {Component} from 'react';
import {DrawerNavigator} from 'react-navigation';
import {MainFeed,Login,Camera,Profile,Register} from '../../components/screens'

const Drawer = DrawerNavigator({

    LOIN: {
        screen: Login
    },
    CAMERA: {
        screen: Camera
    },
    MAINFEED: {
        screen: MainFeed
    }

})


export default Drawer;
