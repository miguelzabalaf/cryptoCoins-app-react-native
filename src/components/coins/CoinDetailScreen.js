import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import Colors from '../../res/colors';

class CoindDetailScreen extends Component {

  state = {
    coin: {}
  }

  getSymbolIcon = (name) => {
    if (name) {
      const symbol = name.toLowerCase().replace(" ", "-");
      return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
    }
  }

  componentDidMount() {
    // console.log('Coin', this.props.route.params);
    const { coin } = this.props.route.params
    // console.log(coin);
    this.props.navigation.setOptions({ title: coin.symbol })
    this.setState({ coin })

  }

  render() {

    const { coin } = this.state;

    const getImageArrowByPercent = (percent) => {
      if( percent > 0 ) {
        return require("cryptoCoins/src/assets/icons/arrow_up.png");
      } else {
        return require("cryptoCoins/src/assets/icons/arrow_down.png");
      }
    }

    return (
      <View style={ styles.container }>

        <View style={ styles.containerHeader }>
          <Image style={ styles.coinIcon } source={{ uri: this.getSymbolIcon(coin.name) }}/>
          <Text style={ styles.coinName }>{ coin.name }</Text>
        </View>

        <View style={ styles.containerPercentChange }>
          <View style={ styles.percent }>
            <View style={ styles.percentHeader }>
              <Text  style={ styles.percentHour }>1h</Text>
              <Image style={ styles.percentArrow } source={ getImageArrowByPercent(coin.percent_change_1h) }/>
            </View>
            <Text style={ styles.percentValue }>{ coin.percent_change_1h }</Text>
          </View>
          <View style={ styles.percent }>
            <View style={ styles.percentHeader }>
              <Text  style={ styles.percentHour }>24h</Text>
              <Image style={ styles.percentArrow } source={ getImageArrowByPercent(coin.percent_change_24h) }/>
            </View>
            <Text style={ styles.percentValue }>{ coin.percent_change_24h }</Text>
          </View>
          <View style={ styles.percent }>
            <View style={ styles.percentHeader }>
              <Text  style={ styles.percentHour }>7d</Text>
              <Image style={ styles.percentArrow } source={ getImageArrowByPercent(coin.percent_change_7d) }/>
            </View>
            <Text style={ styles.percentValue }>{ coin.percent_change_7d }</Text>
          </View>
        </View>
          <Text>Coin Detail Screen</Text>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
    padding: 16
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  coinIcon: {
    width: 25,
    height: 25,
    marginRight: 16
  },
  coinName : {
    fontSize: 20,
    color: Colors.white
  }, 
  containerPercentChange: {
    backgroundColor: "#1E2128",
    flexDirection: "row"
  },
  percent: {
    flex: 1,
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderColor: Colors.charade,
    borderWidth: 1.5
  },
  percentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3
  },
  percentHour: {
    color: Colors.white,
    marginRight: 5
  },
  percentArrow: {
    width: 12,
    height: 12
  },
  percentValue: {
    color: Colors.white,
    opacity: 0.5
  }
})

export default CoindDetailScreen;