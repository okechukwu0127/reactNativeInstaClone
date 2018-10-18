import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet, ActivityIndicator, AsyncStorage} from 'react-native';
import config from '../../../config'



class Login extends  Component
{
    componentDidMount()
    {
        try {

           // alert('--')
           AsyncStorage.getItem(config.userKey)
               .then((item)=>{
                   //alert(item)
                   {<ActivityIndicator size = "large" />}
                   if(item){
                       this.setState({uniqID:item,uniqIdOnly:'yes'})
                          // alert(this.state.credentials.password)
                       this.login();
                       //this.props.navigation.navigate('intro');
                   }
               })


        }
        catch (err)
        {
            alert('ERROR-ASYNC \n' +err.message);

        }
    }
    constructor()
    {
        super();
        this.state = {
            credentials: {
                email:"",
                password:""
            },
            loading:false,
            uniqIdOnly:'',
            uniqID:''
        }
    }

    register()
    {

        //alert('login')
        this.props.navigation.navigate('register')
    }


    resetUniqueID()
    {
         this.setState({
                uniqIdOnly:'',
                uniqID:''
                   })
        return this.login();

        //alert('STATE \n'+this.state.credentials)


    }

    login()
    {
        let email=this.state.credentials.email;
        let pass = this.state.credentials.password;

        //alert(JSON.stringify(this.state));
        //alert(this.state.credentials.passOnly)



        if(((email =='') || (pass =='')) && this.state.uniqIdOnly==''  )
        {
            alert('Email & Password must be provided');

        }else
        {

            this.setState({loading:true})

            fetch(config.baseUrl.url+config.baseUrl.login, {
                method: 'POST',
                headers: new Headers({

                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify([this.state.credentials,{uniqID:this.state.uniqID,uniqIdOnly:this.state.uniqIdOnly}])

            })
                .then(response => response.json())
                .then(jsonResponse=>
                {
                    this.setState({loading:false})
                   // alert(JSON.stringify(jsonResponse))
                    if(jsonResponse.statusMsg=='success')
                    {
                        alert('Account Login Successfully')
                        AsyncStorage.setItem(config.userKey,jsonResponse.uniqID)

                        this.props.navigation.navigate('message')
                    }
                    else
                    {
                        alert('Invalid Email or Password')

                    }
                })
                .catch(err=>{
                    this.setState({loading:false})
                    alert('ERROR \n' +err.message);
                    //console.log(err.message);
                }).done();
        }


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
                <Text style={{fontSize:25,marginBottom:10}}>Login Now</Text>



                <TextInput
                    onChangeText={text=>this.updateText(text,'email')}
                    style={styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                />

                <TextInput
                    onChangeText={text=>this.updateText(text,'password')}
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    autoCorrect={false}
                />

                <Button
                    onPress={()=>{
                        this.resetUniqueID();

                    }}
                    title="Login"/>

                {
                    (this.state.loading)
                        ?
                        (<ActivityIndicator size = "large" />)
                        :
                        null
                }


                <Text
                    onPress={()=>{this.register()}}
                    style={styles.loginText}>
                    Don't have an account, Register!
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

export default  Login;