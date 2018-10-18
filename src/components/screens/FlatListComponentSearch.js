import React, {Component} from 'react';
import {Text, FlatList, ListView, View} from 'react-native';
import {List, ListItem} from 'react-native-elements';

class FlatListComponentSearch extends Component
{

    constructor(props)
    {
        super(props)

        this.state = {
            loading: false,
            data:[],
            page:1,
            seed:1,
            error:null,
            refreshing:false
            };
    }

    componentDidMount()
    {
        this.makeRemoteRequest();
    }

    makeRemoteRequest()
    {
        const {page,seed} = this.state;
        const url =  `https://randomuser.me/api/?seed=${seed}&page=${page}&result=20'`;
        this.setState({loading:true});

        fetch(url)
            .then(res => res.json())
            .then(res => {

                this.setState({
                    page: page==1? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error=>{
                this.setState({error:error, loading:false})
            })
    }

    render()
    {

        return(
            <View style={styles.flatListContainer}>
                {/*<Text>Coming Soon</Text>*/}
                <List>
                    <FlatList
                        data={this.state.data}
                        renderItem={({item})=>
                        {
                            <ListItem
                                roundAvator
                                title={`${item.name.first} ${item.name.last}`}
                                subtitle={item.email}
                                avatar={{uri: item.picture.thumbnail}}
                                />
                        }}

                        keyExtractor={()=>item.email}
                    />
                </List>
            </View>
        )
    }




}

const styles={

    flatListContainer:
        {
            flex: 1,
            display:'flex',
            alignItems: "center",
            backgroundColor: 'rgb(243,243,243)',
            justifyContent:'center',
            widget: 100+'%',
            height: 100 +'%',



        }
}

export default FlatListComponentSearch;
