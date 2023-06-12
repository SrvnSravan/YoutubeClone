import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const GenreCard = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Food</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Travel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Sports</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Vlogs</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Music</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Vlogs</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Learn</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>News</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Film</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Artist</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Games</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  cardContainer: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#e2e2e2',
    width: 50,
    height: 30,
    marginHorizontal: 3,
  },
  text: {
    color: 'black',
    marginLeft: 5,
    marginTop: 5,
  },
});
export default GenreCard;
