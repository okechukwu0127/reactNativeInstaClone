import React from 'react';
import {Text, View, Image, StyleSheet,Dimensions, TouchableOpacity, AsyncStorage} from 'react-native';


const MessageShort = props =>
{

    const MessageRow = ((!props.sentMessage==true)?{flexDirection:'row'}:{flexDirection:'row-reverse'})
console.warn(props.sendMessage+' -- '+JSON.stringify(MessageRow))
    const containerStyle = [styles.Message];
    containerStyle.push(MessageRow);

    //alert(props.sendMessage+' -- '+JSON.stringify(MessageRow))

    return (
        <View style={containerStyle} >
                <View style={styles.userCol}>
                    <Image
                        style={styles.imgCrop}
                        source={{
                            uri:"https://lh3.googleusercontent.com/ulR9mR3uC5R79sPhLHfPwUTPWHe1BG3vLYozdROKJafRrfVcTVAcbZkjIbTsKHZ6t7XOV8T6s7ngHd-tgR9pKltycg"
                        }}
                    />
                </View>


            <View style={styles.bottomRow}>
                <Text style={styles.msg}>{props.msg}</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    imgCrop:{
        width: 35,
        height:35,
        borderRadius: 20,
        marginTop:15,
        borderWidth: StyleSheet.hairlineWidth,
    },
    msg:{

        fontSize:13,
        color:'#616161'
    },
    userCol:{
       /* flexDirection:"row",
        justifyContent:'flex-start'*/

    },


    topRow:{
        flexDirection: "row"

    },
    bottomRow:{
        flexDirection: "row",
        marginTop: 10,

        borderColor:'rgb(245,245,245)',
        borderWidth: StyleSheet.hairlineWidth,
        marginHorizontal:10,

        padding:15,
        borderRadius:10,
        marginLeft: 10,
        backgroundColor:'rgb(255,255,255)',
    },

    Message:
        {
            width:90+'%',
            flexDirection:"row",

            /*margin:20,
            marginTop:5,
            marginBottom:5,
            padding:20,
            paddingTop:5,
            paddingBottom:5,*/
            paddingHorizontal: 30,
            marginHorizontal: 20,


        }
})
export default MessageShort;