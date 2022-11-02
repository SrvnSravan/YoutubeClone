import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const GenreCard = () => {
    return(

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.cardContainer}>

            <Text style={styles.text}>Food</Text>
            </View>

            <View style={styles.cardContainer}>
            <Text style={styles.text}>Travel</Text>
            </View>

            <View style={styles.cardContainer}>
            <Text style={styles.text}>Sports</Text>
            </View>

            <View style={styles.cardContainer}>
            <Text style={styles.text}>Vlogs</Text>
            </View>

            <View style={styles.cardContainer}>
            <Text style={styles.text}>Music</Text>
            </View>

            <View style={styles.cardContainer}>
            <Text style={styles.text}>Vlogs</Text>
            </View>

            <View style={styles.cardContainer}>
            <Text style={styles.text}>Vehicles</Text>
            </View>

            <View style={styles.cardContainer}>
            <Text style={styles.text}>News</Text>
            </View>

            <View style={styles.cardContainer}>
            <Text style={styles.text}>Film</Text>
            </View>

            <View style={styles.cardContainer}>
            <Text style={styles.text}>Artist</Text>
            </View>

            <View style={styles.cardContainer}>
            <Text style={styles.text}>Games</Text>
            </View>




        </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        marginLeft: 5
    },
    cardContainer : {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: '#e2e2e2',
        width: 50,
        height: 30,
        marginHorizontal: 3

    },
    text : {
        color: 'black',
        marginLeft: 5,
        marginTop: 5
    }

})
export default GenreCard;
