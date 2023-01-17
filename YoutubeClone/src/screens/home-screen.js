import React from 'react';
import {View} from 'react-native';
// import MyTabs from '../components/bottom-tab';
import GenreCard from '../components/genre-card';
import HomeFeeds from '../components/home-feeds';
import TopBar from '../components/top-bar';

const HomeScreen = () => {
  return (
    <View>
      <View>
        <View>
          <TopBar />
          <GenreCard />
        </View>
      </View>

      <HomeFeeds />
    </View>
  );
};

export default HomeScreen;
