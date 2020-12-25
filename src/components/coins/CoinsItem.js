import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const CoinsItem = ({ item }) => {

  const getImageArrow = () => {
    if( item.percent_change_1h > 0 ) {
      return require("cryptoCoins/src/assets/icons/arrow_up.png");
    } else {
      return require("cryptoCoins/src/assets/icons/arrow_down.png");
    }
  }

  return (
    <Ripple style={ styles.container }>
      <View style={ styles.containerContentLeft }>
        <View style={ styles.symbolContainer }>
          <Text  style={ styles.symbolText }>{ item.symbol }</Text>
        </View>
        <View style={ styles.nameContainer }>
          <Text style={ styles.nameText }>{ item.name }</Text>
        </View>
        <View style={ styles.priceContainer }>
          <Text style={ styles.priceText }>$ { item.price_usd }</Text>
        </View>
      </View>

      <View style={ styles.containerContentRight }>
        <View style={ styles.percentContainer }>
          <Text style={ styles.percentText }>{ item.percent_change_1h }</Text>
          <Image
          style={ styles.arrowIcon }
            source={ getImageArrow() }
          />
        </View>
      </View>
    </Ripple>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#23252D",
    alignItems: "center",
    justifyContent: "space-between"
  },
  containerContentLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  containerContentRight: {
    flexDirection: "row",
    alignItems: "center"
  },
  symbolContainer: {
    backgroundColor: "#1E2128",
    borderRadius: 10,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16
  },
  symbolText: {
    fontSize: 10,
    color: Colors.white,
    opacity: .5
  },
  nameContainer: {
    marginRight: 8
  },
  nameText: {
    color: Colors.white,
  },
  percentContainer: {
    alignItems: "center",
    flexDirection: "row"
  },
  percentText: {
    color: Colors.white,
    opacity: 0.35,
    fontSize: 10,
    paddingTop: 5,
    marginRight: 10
  },
  priceContainer: {

  },
  priceText: {
    color: Colors.white,
    fontSize: 10,
    paddingTop: 5,
    opacity: 0.5
  },
  arrowIcon: {
    width: 15,
    height: 15
  }

})

export default CoinsItem;