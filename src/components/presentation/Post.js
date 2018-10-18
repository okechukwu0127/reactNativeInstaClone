import React , {Component} from 'react';
import {Text, View, Image, StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import config from '../../../config';

class Post extends Component
{
    constructor()
    {
        super();
        this.state =
            {
                screenWidth:0,
                liked:false,
                imgVal:"https://lh3.googleusercontent.com/cZ3Oi0SQhDfuw4pdXfP-n5SRQLoPMZLEFnIPKRFOGjtM356cSv56YFmgX2C3GsJPn-TFHDoPvtMhM141vBWiexmT"
            }
    }

    likedToggled()
    {
        this.setState({ liked : !this.state.liked})

    }

    componentDidMount()
    {
        this.setState({
            screenWidth : (Dimensions.get('window').width)/1
        });
    }
    handleClick() {
        var min = 1;
        var max = 4;
        var rand =  Math.floor(min + (Math.random() * (max-min)));

        return rand;

    }

    render()
    {

        const img1="https://lh3.googleusercontent.com/esXDYGj4oDqe73i8VqoDOacwya1LgegZkdWzA2Fn4QwC2P4vNW1cugvMkxgl2aC7z_det8SZPgnos6so5ww7ICpfbg";
        const img2="https://lh3.googleusercontent.com/WqN5vMTQkNTIJDobLRAWQQ506Ga4rVx9DNAah8pLXRysWkc5TbLwLC6H8h20zKUsNAlHRBECmhwHc5pxieRx86T_og";
        const img3="https://lh3.googleusercontent.com/YuUc9QYM1NOcM6KgwDquxGUVUDjKJiOfSOIT7x3WV2mJ7nS2VH0JnoZHT_IeQh4Fxb3I9ynhUefb7kb95wTDe3P_fA";
        const img4="https://lh3.googleusercontent.com/cZ3Oi0SQhDfuw4pdXfP-n5SRQLoPMZLEFnIPKRFOGjtM356cSv56YFmgX2C3GsJPn-TFHDoPvtMhM141vBWiexmT";






        const rand_=this.handleClick();

        if(rand_==1)     { this.state.imgVal =img1 }
        else if(rand_==2){ this.state.imgVal =img2}
        else if(rand_==3){ this.state.imgVal =img3}
        else if(rand_==4){ this.state.imgVal =img4}
        else
        {
            this.state.imgVal =img4
        }

        const ImageUri =this.state.imgVal

        const Imageheight = Math.floor(this.state.screenWidth*1.0);
        const heartIconColor = (this.state.liked)? 'rgb(252,61,57)':null;


        return(

            <View style={{flex: 1, width:100+'%'}}>

                <View style={styles.userBar}>

                    <View  style={{flexDirection:'row', alignItems: "center"}}>
                        <Image
                            style={styles.userPic}
                            source={{uri:'https://lh3.googleusercontent.com/ulR9mR3uC5R79sPhLHfPwUTPWHe1BG3vLYozdROKJafRrfVcTVAcbZkjIbTsKHZ6t7XOV8T6s7ngHd-tgR9pKltycg'}}/>

                        <Text style={{marginLeft:10}}>
                            OkechukwuEze

                        </Text>

                    </View>

                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:30, marginRight:20}}>...</Text>
                    </View>



                </View>
                <TouchableOpacity
                    activeOpacity ={0.7}
                    onPress={()=>{
                         //alert('press')
                        this.likedToggled()
                    }}>
                    <Image
                        style={{width:this.state.screenWidth, height: Imageheight}}
                        source={{
                            uri: ImageUri+'=s'+this.state.screenWidth+'-c'  }}/>
                </TouchableOpacity>

                <View style={styles.iconBar}>

                    <Image style={[
                        styles.icon,
                        {tintColor:heartIconColor}
                    ]} source={config.images.heartIcon} />
                    <Image style={styles.icon} source={config.images.chatIcon} />
                    <Image resizeMode="stretch" style={styles.icon} source={config.images.arrowIcon} />
                </View>

                <View style={styles.commentBar}>

                    <Image style={{ width: 15, height:15}} source={config.images.heartIcon} />
                    <Text style={{fontSize:10, marginLeft:5}}>123 Likes</Text>
                </View>
            </View>


        )

    }

}

const styles = StyleSheet.create({

    userBar: {
        width:100+'%',
        /*height:50,*/
        height:config.styleConstans.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        justifyContent: "space-between",

    },

    userPic: {
        width:40,
        height:40,
        borderRadius:40,
        borderWidth: 2,
        borderColor:'rgb(233,233,233)',
    },

    iconBar: {
        height:config.styleConstans.rowHeight,
        width:100+'%',
        borderColor:'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth:StyleSheet.hairlineWidth,
        flexDirection:'row',
        alignItems:'center'
        /*borderVerticalWidth: StyleSheet.hairlineWidth*/


    },

    icon : {
        height:30,
        width:30,
        paddingHorizontal: 20
    },

    commentBar: {
        width:100+'%',
        borderColor:'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth:StyleSheet.hairlineWidth,
        height:config.styleConstans.rowHeight,
        flexDirection:'row',
        padding: 10,

    }

})

export default  Post;

