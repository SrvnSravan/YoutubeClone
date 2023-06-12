import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

const GenreCircleCard = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
          <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
          <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
          <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
          <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
          <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
          <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
          <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
          <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
          <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
          <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
          <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
          <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
          </TouchableOpacity>
      </View>

      <View style={styles.container}>
          <TouchableOpacity>
          <Image
            style={styles.dp}
            source={require('../assets/images/dp.jpg')}
          />
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 15,
    marginBottom: 20,
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
  dp: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
});
export default GenreCircleCard;
