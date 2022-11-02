import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

const TopBar = () => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/YouTube-logo.png')} />
            </View>

            <View style={styles.screenIconContainer}>
                <Image style={styles.screen}source={require('../assets/images/screen-share.png')}/>
            </View>
            <View style={styles.bellContainer}>
                <Image style={styles.bell} source={require('../assets/images/Bell1.png')}/>
            </View>
            <View style={styles.searchContainer}>
                <Image style={styles.search} source={require('../assets/images/search.png')}/>
            </View>
            <View style={styles.dpContainer}>
                <Image style={styles.dp} source={require('../assets/images/dp.jpg')}/>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    image : {
        width: 70,
        height: 50
    },
    screen: {
        width: 25,
        height: 25
    },
    container : {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    imageContainer : {
        marginLeft: 5
    },
    screenIconContainer : {
        marginTop: 10,
        marginLeft: 150
    },
    bell : {
        width: 20,
        height: 25
    },
    bellContainer : {
        marginTop: 10,
        marginLeft: 20

    },
    search : {
        width: 20,
        height: 20
    },
    searchContainer : {
        marginTop: 10,
        marginLeft: 20
    },
    dpContainer : {
        marginTop: 10,
        marginLeft: 20
        
    },
    dp : {
        width : 25,
        height: 25
        
    },
    

})

export default TopBar;