import React from 'react';
import {Text, View, Image, StyleSheet,Dimensions, TouchableOpacity} from 'react-native';


const Message = props =>
{



    return (
        <TouchableOpacity
            activeOpacity={0.7}
              style={styles.Message}
            onPress={()=> props.nav()}
        >

            <View style={styles.topRow}>

                <View style={styles.userCol}>
                    <Image
                        style={styles.imgCrop}
                        source={{
                            uri:"https://lh3.googleusercontent.com/ulR9mR3uC5R79sPhLHfPwUTPWHe1BG3vLYozdROKJafRrfVcTVAcbZkjIbTsKHZ6t7XOV8T6s7ngHd-tgR9pKltycg"
                        }}
                    />

                    <View>
                    <Text>{props.fromuser}</Text>
                    <Text style={styles.hashCol}>{props.touser}</Text>
                    </View>

                </View>

                <View style={styles.timeCol}>
                    {/*<Text>{props.datetime}</Text>*/}
                    <Text style={styles.timeD}>{"Yesterday"}</Text>
                </View>
            </View>

            <View style={styles.bottomRow}>
                <Text style={styles.msg}>{props.msg}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    imgCrop:{
      width: 35,
      height:35,
      borderRadius: 20,
        borderWidth: StyleSheet.hairlineWidth,
    },
    msg:{

        fontSize:13,
        color:'#616161'
    },
    hashCol:{
      fontSize:10,
      color:'#ccc'
    },
    userCol:{
        flexDirection:"row",
        justifyContent:'flex-start'

    },
    timeD:
        {
            fontSize:12,
            color:'#ccc'

        },

    timeCol:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center'

    },
    topRow:{
        flexDirection: "row"

    },
    bottomRow:{
        flexDirection: "row",
        marginTop: 10,
    },

    Message:
        {
            width:90+'%',
            borderColor:'rgb(245,245,245)',
            borderWidth: StyleSheet.hairlineWidth,
            marginHorizontal:10,
            marginBottom:10,
            padding:15,
            borderRadius:10,
            backgroundColor:'rgb(255,255,255)'




        }
})
export default Message;