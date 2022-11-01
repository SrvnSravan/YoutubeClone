import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { color } from 'react-native-reanimated';

const SplashScreen = () => {

    useEffect(() => {
        const timeout = setTimeout(async () => {
          //nav.navigate('');
        }, 3000);
        return () => {
          clearTimeout(timeout);
        };
      }, []);
    return(
        <View>
            <View style={styles.container}>
            <Image
          source={require('../assets/YouTube-Symbol.png')} 
          style={styles.image}/>
          </View>

        </View>
    )
};

const styles = StyleSheet.create({
image : {
    width: 120,
    height: 90,
    marginTop: 280
},
container : {
    justifyContent: 'center',
    alignItems: 'center'
    
}
});

export default SplashScreen;