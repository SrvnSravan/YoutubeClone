import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation();

  const handleReturnPress = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <View>
        <TouchableOpacity onPress={handleReturnPress}>
          <Image
            style={styles.return}
            source={require('../assets/images/return1.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Search YouTube"
          placeholderTextColor={'#808080'}
          textAlign="left"
          backgroundColor="#d9d9d9"
          clearButtonMode="always"
        />
      </View>

      <View>
        <TouchableOpacity>
          <Image
            style={styles.micImage}
            source={require('../assets/images/mic2.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  inputBox: {
    borderRadius: 25,
    height: 40,
    width: 300,
    marginLeft: 15,
    marginTop: 10,
    paddingLeft: 15,
  },
  micImage: {
    height: 25,
    width: 25,
    marginLeft: 10,
    marginTop: 17,
  },
  return: {
    height: 20,
    width: 20,
    marginTop: 20,
    marginLeft: 10,
  },
});
