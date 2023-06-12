import React from 'react';
import {View, Text} from 'react-native';
import TopBar from '../components/top-bar';
import GenreCard from '../components/genre-card';
import HomeFeeds from '../components/home-feeds';
import GenreCircleCard from '../components/genre-circle-card';

const SubscriptionScreen = () => {
  return (
    <View>
      <TopBar />
      <GenreCircleCard />
      <GenreCard />
      <HomeFeeds />
    </View>
  );
};

export default SubscriptionScreen;
