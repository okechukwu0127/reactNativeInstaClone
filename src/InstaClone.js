import React , {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {MainFeed,Login,Camera,Profile,Register, MessageChat, Conversation, FlatListComponentSearch} from './components/screens'

import {SwitchNavigator, createTabNavigator, TabNavigator, createStackNavigator, StackNavigator, createSwitchNavigator} from 'react-navigation';


const IntroStack = createStackNavigator({


        login:Login,
    conversation: Conversation,
    message:MessageChat,
    register:  Register,
    flatlistcompS:FlatListComponentSearch,


},
    {
        navigationOptions:{
            headerStyle:
            {
                backgroundColor:'rgb(162,55,243)'
            },
            headerTitleStyle:
                {
                    fontWeight: 'bold',
                    color: 'rgb(255,255,255)',
                },
            headerTintColor:'rgb(255,255,255)',
        }
    })
const Tabs = TabNavigator ({

    main:MainFeed,
    camera: Camera,
    profile: Profile

})

const  MainStack = createSwitchNavigator({

    // main: MainFeed,
    tab:  IntroStack,
    intro: Tabs,

})

class InstaClone extends Component
{



    render()
    {
        return(

                <MainStack/>
        )
    }
}

export default  InstaClone;
