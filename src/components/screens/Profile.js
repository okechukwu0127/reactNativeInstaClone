import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';



class Profile extends  Component
{


    Main()
    {
        this.props.navigation.navigate('main')
    }
    render()
    {
        return(
            <TouchableOpacity style={{
                justifyContent: "center",
                flex: 1,
                alignItems: 'center',
                width:100+'%',
                height: 100+'%',
                fontSize:50,

            }}
                              onPress={()=>{
                                  this.Main();
                              }}
            >
                <Text>PROFILE</Text>
            </TouchableOpacity>
        )
    }
}

export default  Profile;