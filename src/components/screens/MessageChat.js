import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    AsyncStorage,
    FlatList,
    StatusBar} from 'react-native';

import config from '../../../config';
import {Message} from '../container/view';

class MessageChat extends  Component
{

    static navigationOptions  = {
        title: "MESSAGE"
    }
    constructor()
    {
        super();
        this.state = {
            loading:true,
            messages:[]
        }
    }

    componentDidMount()
    {
        AsyncStorage.getItem(config.userKey)
            .then((key)=>{


                const query = '?toUser='+key;

                //alert(config.baseUrl.url+config.baseUrl.msgJson+query)

                return fetch(config.baseUrl.url+config.baseUrl.msgJson+query,
                    {
                        method:'GET',
                        headers: new Headers({
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }),
                       // body: JSON.stringify('')
                    }).then(response =>
                {

                    return response.json()

                })
                    . then(jsonResponse=>
                    {

                        this.setState({
                            messages:  jsonResponse.data,
                            loading:false
                        })
                    })
                    .catch(err=>{

                        alert('ERROR \n' +err.message);

                        this.setState({
                            loading:false
                        })
                        //console.log(err.message);
                    }).done();

            })


    }
    navigateToConversation(item)
    {
        //console.warn(item.fromuser)
        this.props.navigation.navigate("conversation",{user:item.fromuser,toUser:item.touser})

    }


    render()
    {

        const {messages} = this.state;

        //const lastIndex = messages.length - 1;


        return(

            <View style={styles.Container}>
                <StatusBar barStyle="light-content"/>

                {this.state.loading?(<ActivityIndicator animating size="large"/>):null}

                {/*{messages.map((message,i)=>{

                   // const last = i === lastIndex;
                    return <Message  {...message} />
                })}*/}

                <FlatList
                    data={this.state.messages}
                    keyExtractor={(item) =>item.id}
                    renderItem={({item})=>
                        <Message
                            {...item}
                        nav={this.navigateToConversation.bind(this, {...item})}
                        />
                    }

                />

            </View>
        );
    }
}

const styles = {

    Container:{
        flex: 1,
        display:'flex',
        alignItems: "center",
        backgroundColor: 'rgb(243,243,243)',
        justifyContent:'center',
        widget: 100+'%',
        height: 130 +'%',
        marginTop: 5,
        marginBottom: 20,
    }

}
export default MessageChat;
