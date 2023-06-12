import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import SearchScreen from '../screens/search-screen';

const TopBar = () => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/YouTube-logo.png')}
        />
      </View>

      <View style={styles.screenIconContainer}>
        <TouchableOpacity>
          <Image
            style={styles.screen}
            source={require('../assets/images/screen-share.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bellContainer}>
        <TouchableOpacity>
          <Image
            style={styles.bell}
            source={require('../assets/images/Bell1.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => nav.navigate(SearchScreen)}>
          <Text>
            <Icon name="search" size={30} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dpContainer}>
        <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 50,
  },
  screen: {
    width: 25,
    height: 25,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  imageContainer: {
    marginLeft: 5,
  },
  screenIconContainer: {
    marginTop: 10,
    marginLeft: 150,
  },
  bell: {
    width: 20,
    height: 25,
  },
  bellContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  search: {
    width: 20,
    height: 20,
  },
  searchContainer: {
    marginTop: 8,
    marginLeft: 20,
  },
  dpContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  dp: {
    width: 25,
    height: 25,
  },
});

export default TopBar;
