import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator, AsyncStorage, FlatList} from 'react-native';
import config from '../../../config';
import  MessageConversation  from './view/MessageConversation';
import  MessageShort  from './view/MessageShort';
import Message from "../container/view/Message";


class Conversation extends Component
{

    constructor()
    {
        super();
        this.state = {
            loading:true,
            messages:[],
            key:''
        }
    }

    static navigationOptions =({navigation})=> {
        const params  =navigation.state.params || {};
        //console.warn(navigation.state.params)

        return
        {
            headerTitle: params.currentConversation || "Conversation"
        };
    };
componentDidMount()
{

    const { user } = this.props.navigation.state.params;

    this.props.navigation.setParams({
        currentConversation:user
    });




    AsyncStorage.getItem(config.userKey)
        .then((key)=>{

            this.setState({key:key})

            const query = '?fromUser='+encodeURI(user)+'&toUser='+key;
            const url = config.baseUrl.url+config.baseUrl.msgJson+query

            //alert((key));

            fetch(url,
                {
                    method:'GET',
                    headers: new Headers({
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }),
                    // body: JSON.stringify('')
                }).
            then(response =>
            {
                return response.json()
            })
                . then(responseJson=>
                {
                    //console.warn(config.baseUrl.url+config.baseUrl.msgJson+query+'\n'+jsonResponse.data);
                    //alert(url+'\n'+JSON.stringify(responseJson));
                    this.setState({
                        messages:  responseJson.data,
                        loading:false
                    })
                })
                .catch(err=>{
                    alert('ERROR \n' + url +'\n'+err.message);
                    this.setState({
                        loading:false
                    })
                }).done();
        })



}


    render()
    {
        return(
            <View style={styles.Container}>
                {this.state.loading?(<ActivityIndicator animating size="large"/>):null}

                {/*{this.state.messages.map((message,i)=>{
                   // const last = i === lastIndex;
                    return <MessageConversation  {...message} />
                })}*/}
{/*
                {alert((this.state.messages.touser) +' -- '+(this.props.navigation.state.params.toUser))}
*/}

                <FlatList
                    data={this.state.messages}
                    keyExtractor={(item) =>item.id}
                    renderItem={({item}) =>
                        //alert(messages.fromuser)
                        <MessageShort
                            sendMessage={item.fromuser === this.props.navigation.state.params.toUser}

                            {...item}

                        />
                    }
                />
            </View>
        )
    }
}

export default Conversation;

const styles = {

    Container:{
        flex: 1,
        display:'flex',
        alignItems: "center",
        backgroundColor: 'rgb(243,243,243)',
        justifyContent:'center',
        widget: 100+'%',
        height: 130 +'%',
        marginTop: 15,
        marginBottom: 20,
    }

}