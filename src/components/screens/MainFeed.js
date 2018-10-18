import React , {Component} from 'react';
import {Text, View, Image, StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import config from '../../../config';
import {PostFeed} from '../../components/container'; //'./components/container'
/*
import Drawer from '../screens/Drawer'
*/

class InstaClone extends Component 
{
    render()
    {
        return(
            <View style={{flex:1, width:100+'%',height:100+'%'}}>
                <View
                    style={styles.tempNav}>
                    <Text>Instagram</Text>
                </View>
                <PostFeed/>

           </View>
        )
    }
}

const styles = StyleSheet.create({

    tempNav: {
        width:100+'%',
        height:config.styleConstans.rowHeight,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor:'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center",
        marginTop:10,
    }

})

export default  InstaClone;
