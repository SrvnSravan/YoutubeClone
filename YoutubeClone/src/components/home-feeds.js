import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeFeeds = () => {
  return (
    <ScrollView>
      <View>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.thumbnail}
              source={require('../assets/images/thumbnail.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.dp}
              source={require('../assets/images/dp.jpg')}
            />
          </View>

          <View>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                color: 'black',
                marginTop: 15,
              }}>
              How to make a Youtube Video...
            </Text>

            <Text style={{marginLeft: 5, fontSize: 15, color: 'grey'}}>
              Toms Maverick . 29k views . 2hrs ago
            </Text>
          </View>

          <View>
            <Image
              style={styles.threeDot}
              source={require('../assets/images/three-dot.png')}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Image
              style={styles.thumbnail}
              source={require('../assets/images/thumbnail2.webp')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.dp}
              source={require('../assets/images/dp.jpg')}
            />
          </View>

          <View>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                color: 'black',
                marginTop: 15,
              }}>
              My Reaction Video...
            </Text>
            <Text style={{marginLeft: 5, fontSize: 15, color: 'grey'}}>
              Toms Maverick . 29k views . 2hrs ago
            </Text>
          </View>
          <View>
            <Image
              style={styles.threeDot}
              source={require('../assets/images/three-dot.png')}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Image
              style={styles.thumbnail}
              source={require('../assets/images/thumbnail3.jpg')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.dp}
              source={require('../assets/images/dp.jpg')}
            />
          </View>

          <View>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                color: 'black',
                marginTop: 15,
              }}>
              How to design youtube thumbnails...
            </Text>
            <Text style={{marginLeft: 5, fontSize: 15, color: 'grey'}}>
              Toms Maverick . 29k views . 2hrs ago
            </Text>
          </View>
          <View>
            <Image
              style={styles.threeDot}
              source={require('../assets/images/three-dot.png')}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Image
              style={styles.thumbnail}
              source={require('../assets/images/thumbnail5.webp')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.dp}
              source={require('../assets/images/dp.jpg')}
            />
          </View>

          <View>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                color: 'black',
                marginTop: 15,
              }}>
              Thanks giving Vlog - 23...
            </Text>
            <Text style={{marginLeft: 5, fontSize: 15, color: 'grey'}}>
              Toms Maverick . 29k views . 2hrs ago
            </Text>
          </View>
          <View>
            <Image
              style={styles.threeDot}
              source={require('../assets/images/three-dot.png')}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Image
              style={styles.thumbnail}
              source={require('../assets/images/thumbnail6.webp')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.dp}
              source={require('../assets/images/dp.jpg')}
            />
          </View>

          <View>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                color: 'black',
                marginTop: 15,
              }}>
              Grow your Youtube channel...
            </Text>
            <Text style={{marginLeft: 5, fontSize: 15, color: 'grey'}}>
              Toms Maverick . 29k views . 2hrs ago
            </Text>
          </View>
          <View>
            <Image
              style={styles.threeDot}
              source={require('../assets/images/three-dot.png')}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Image
              style={styles.thumbnail}
              source={require('../assets/images/thumbnail.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.dp}
              source={require('../assets/images/dp.jpg')}
            />
          </View>

          <View>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                color: 'black',
                marginTop: 15,
              }}>
              How to make a Youtube Video...
            </Text>
            <Text style={{marginLeft: 5, fontSize: 15, color: 'grey'}}>
              Toms Maverick . 29k views . 2hrs ago
            </Text>
          </View>
          <View>
            <Image
              style={styles.threeDot}
              source={require('../assets/images/three-dot.png')}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Image
              style={styles.thumbnail}
              source={require('../assets/images/thumbnail.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.dp}
              source={require('../assets/images/dp.jpg')}
            />
          </View>

          <View>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                color: 'black',
                marginTop: 15,
              }}>
              How to make a Youtube Video...
            </Text>
            <Text style={{marginLeft: 5, fontSize: 15, color: 'grey'}}>
              Toms Maverick . 29k views . 2hrs ago
            </Text>
          </View>
          <View>
            <Image
              style={styles.threeDot}
              source={require('../assets/images/three-dot.png')}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Image
              style={styles.thumbnail}
              source={require('../assets/images/thumbnail.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.dp}
              source={require('../assets/images/dp.jpg')}
            />
          </View>

          <View>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                color: 'black',
                marginTop: 15,
              }}>
              How to make a Youtube Video...
            </Text>
            <Text style={{marginLeft: 5, fontSize: 15, color: 'grey'}}>
              Toms Maverick . 29k views . 2hrs ago
            </Text>
          </View>
          <View>
            <Image
              style={styles.threeDot}
              source={require('../assets/images/three-dot.png')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeFeeds;

const styles = StyleSheet.create({
  thumbnail: {
    height: 200,
    width: 400,
    marginTop: 7,
  },
  dp: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  threeDot: {
    marginTop: 15,
    height: 20,
    width: 20,
    marginLeft: 30,
  },
});
