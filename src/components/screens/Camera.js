import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';



class Camera extends  Component
{


    Login()
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
                                  this.Login();
                              }}
            >
                <Text>CAMERA</Text>
            </TouchableOpacity>
        )
    }
}

export default  Camera;