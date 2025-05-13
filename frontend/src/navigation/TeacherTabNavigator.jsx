import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

// Import screens
import TeacherHome from '../screens/Teacher/TeacherHome/TeacherHome';
import TeacherAddProject from '../screens/Teacher/AddProject/AddProject';
import TeacherProjects from '../screens/Teacher/Project/ProjectHome';
import TeacherProgress from '../screens/Teacher/Progress/ProjectProgress';

// Import icons
import Home from '../assets/Navbar/house.svg';
import AddProject from '../assets/Navbar/upload.svg';
import Project from '../assets/Navbar/file-text.svg';
import Progress from '../assets/Navbar/graph.svg';

import HomeClicked from '../assets/Navbar/houseClicked.svg';
import AddProjectClicked from '../assets/Navbar/uploadClicked.svg';
import ProjectClicked from '../assets/Navbar/file-textClicked.svg';
import ProgressClicked from '../assets/Navbar/graphClicked.svg';

const Tab = createBottomTabNavigator();

const TeacherTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#c884fc',
        tabBarInactiveTintColor: '#CDCDCD',
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tab.Screen
        name="TeacherHome"
        component={TeacherHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            const Icon = focused ? HomeClicked : Home;
            return <Icon width={24} height={24} />;
          },
        }}
      />
      <Tab.Screen
        name="TeacherAddProject"
        component={TeacherAddProject}
        options={{
          tabBarLabel: 'Add Project',
          tabBarIcon: ({ focused }) => {
            const Icon = focused ? AddProjectClicked : AddProject;
            return <Icon width={24} height={24} />;
          },
        }}
      />
      <Tab.Screen
        name="TeacherProjects"
        component={TeacherProjects}
        options={{
          tabBarLabel: 'Projects',
          tabBarIcon: ({ focused }) => {
            const Icon = focused ? ProjectClicked : Project;
            return <Icon width={24} height={24} />;
          },
        }}
      />
      <Tab.Screen
        name="TeacherProgress"
        component={TeacherProgress}
        options={{
          tabBarLabel: 'Progress',
          tabBarIcon: ({ focused }) => {
            const Icon = focused ? ProgressClicked : Progress;
            return <Icon width={24} height={24} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingHorizontal: 10,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 0,
    marginBottom: 5,
  }
});

export default TeacherTabNavigator;