import React from 'react';
import {View} from 'react-native';
import GenreCard from '../components/genre-card';
import TopBar from '../components/top-bar';
 

const HomeScreen = () => {
    return(
        <View>
            <TopBar />
            <GenreCard />
        </View>
    )
} 

export default HomeScreen;