import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet, ActivityIndicator} from 'react-native';
import config from '../../../config'



class Register extends  Component
{
    constructor()
    {
        super();
        this.state = {
            credentials: {
                email:"",
                password:"",
                fullname:''
            },
            loading:false
        }
    }

        login()
        {

            //alert('login')
            this.props.navigation.navigate('login')
        }


    register()
    {
        //console.warn(this.state.credentials)
        //alert(JSON.stringify(this.state.credentials));
        //this.props.navigation.navigate('login')

        /*return*/

        this.setState({loading:true})
        fetch(config.baseUrl.url+config.baseUrl.signUp, {
            method: 'POST',
            headers: new Headers({

                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(this.state.credentials)

                //'email='+this.state.credentials.email+'&fullname='+this.state.credentials.fullname+'&password='+this.state.credentials.password,
        })
            .then(response => response.json())
            .then(jsonResponse=>
            {
                this.setState({loading:false})
                if(jsonResponse.statusMsg=='success')
                {
                    alert('Account Registered Successfully')
                    this.props.navigation.navigate('login')
                }
                else
                {
                    alert('Unable to complete registration')

                }
            })
            .catch(err=>{
                this.setState({loading:false})
            alert('ERROR \n' +err.message);
            //console.log(err.message);
        }).done();

    }

    updateText(text, field)
    {
        //alert(text)
        let newCredentials = Object.assign(this.state.credentials);
        newCredentials[field] = text;
        this.setState({
            credentials: newCredentials
        })
    }
    render()
    {
        return(
            <View style={{
                justifyContent: "center",
                flex: 1,
                alignItems: 'center',
                width:100+'%',
                height: 100+'%',

                backgroundColor: "#F5FCFF"

            }}>
                <Text style={{fontSize:25,marginBottom:10}}>Register Now</Text>


                <TextInput
                    autoCapitalize="none"
                    onChangeText={text=>this.updateText(text,'fullname')}
                    style={styles.input}
                    placeholder="Fullname"
                    autoCorrect={false}
                />

                <TextInput
                    autoCapitalize="none"
                    onChangeText={text=>this.updateText(text,'email')}
                    style={styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                />

                <TextInput
                    autoCapitalize="none"
                    onChangeText={text=>this.updateText(text,'password')}
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    autoCorrect={false}
                />

                <Button
                    onPress={()=>{
                        this.register();
                    }}
                    title="Signup"/>

                {
                    (this.state.loading)
                        ?
                        (<ActivityIndicator size = "large" />)
                        :
                        null
                }


                <Text
                    onPress={()=>{this.login()}}
                    style={styles.loginText}>
                    Already Registered, Login
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 20,
        borderColor: "rgb(215,215,215)",
        /*borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth:StyleSheet.hairlineWidth,*/
        borderWidth:StyleSheet.hairlineWidth,
        color:"rgb(0,0,0)",
        width: 90+'%',
        marginBottom: 10,
        padding: 20,
    },
    loginText:
        {

            marginTop: 20,
            color:"rgb(0,0,0)",
            marginBottom: 0,
        }
})

export default  Register;