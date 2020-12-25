import React, { Component } from 'react';
import { View, Text, Pressable, ActivityIndicator, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import Http from '../../libs/http';
import Colors from '../../res/colors';
import CoinsItem from './CoinsItem';

class CoinsScreen extends Component {

  state = {
    coins: [],
    loading: false
  }

  componentDidMount = async () => {
    this.setState({ loading: true });

    const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
    console.log(res);

    this.setState({ coins: res.data, loading: false });
  }

  handlePress = (coin) => {
    // console.log('Go to detail', this.props);
    this.props.navigation.navigate('CoinDetail', { coin })
  }

  render() {

    const { coins, loading } = this.state

    return(
      <View style={ styles.container }>

      {
        loading ? 
          <ActivityIndicator 
            style={ styles.loader }
            color="#DDD" 
            size="large"
          />
        :
          null
      }
        <FlatList
          data={ coins }
          renderItem={ ({ item }) => 
            <CoinsItem 
              item={ item } 
              onPress={ () => this.handlePress(item) } 
            />
          }
        >
          
        </FlatList>  
      </View>
    )
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    marginTop: "50%"
  },
  button: {
    padding: 8,
    backgroundColor: "red",
    borderRadius: 8,
    margin: 16,
    display: "flex",
    textAlign: "center"
  },
  buttonText: {
    textAlign: "center",
    display: "flex",
    color: "white"
  }
})

export default CoinsScreen;