import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import HomeScreen from './index';
import DetailsScreen from './details';
import GenresScreen from './genres';
import AlbumsScreen from './albums';
import FolderScreen from './folder';
import ArtistScreen from './artists';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const Layout = () => {
  return (
    <Navigator
    screenOptions={{
      tabBarStyle: {
        paddingHorizontal: 10, 
        backgroundColor: '#fff', 
      },
      tabBarLabelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      tabBarIndicatorStyle: {
        height: 3,
        backgroundColor: 'blue',
      },
      tabBarItemStyle: {
        width: 'auto', 
        flex: 1,
      },
      tabBarPressColor: 'transparent',
      tabBarScrollEnabled: true,
    }}
  >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'SONGS' }}
      />
      <Screen
        name="Playlists"
        component={DetailsScreen}
        options={{ title: 'PLAYLISTS' }}
      />
      <Screen
        name="Albums"
        component={AlbumsScreen}
        options={{ title: 'ALBUMS' }}
      />
      <Screen
        name="Artists"
        component={ArtistScreen}
        options={{ title: 'ARTISTS' }}
      />
      <Screen
        name="Folders"
        component={FolderScreen}
        options={{ title: 'FOLDERS' }}
      />
      <Screen
        name="Genres"
        component={GenresScreen}
        options={{ title: 'GENRES' }}
      />
    </Navigator>
  );
};

export default Layout;
