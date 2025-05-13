import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Logout from '../../../assets/Teacher/log-out.svg';
import styles from './TeacherHomeStyle';
const StatBox = ({ title, value, bgColor }) => {
  return (
    <View style={[styles.statBox, { backgroundColor: bgColor }]}>
      <Text style={styles.statTitle}>{title}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
};

const TeacherHome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Teacher DashBoard</Text>
        <TouchableOpacity style={styles.logoutButton}>
          <Logout width={24} height={24} />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content}
      showsVerticalScrollIndicator={false}>
        <View style={styles.statsContainer}>
          <View style={styles.statsRow}>
            <StatBox 
              title="Total Projects" 
              value="7" 
              bgColor="#FFD6FF" 
            />
            <StatBox 
              title="Completed Projects" 
              value="7" 
              bgColor="#E7C6FF" 
            />
          </View>
          
          <View style={styles.statsRow}>
            <StatBox 
              title="Ongoing Projects" 
              value="7" 
              bgColor="#C8B6FF" 
            />  
            <StatBox 
              title="Projects Taken" 
              value="7" 
              bgColor="#B8C0FF" 
            />
          </View>
        </View>
        
        <View style={styles.deadlinesSection}>
          <Text style={styles.sectionTitle}>Upcoming Deadlines</Text>
          <View style={styles.deadlinesList}>
            {/* Deadlines content will go here */}
          </View>
        </View>
        
        <View style={styles.deadlinesSection}>
          <Text style={styles.sectionTitle}>Upcoming Deadlines</Text>
          <View style={styles.deadlinesList}>
            {/* Deadlines content will go here */}
          </View>
        </View>
        
        <View style={styles.deadlinesSection}>
          <Text style={styles.sectionTitle}>Upcoming Deadlines</Text>
          <View style={styles.deadlinesList}>
            {/* Deadlines content will go here */}
          </View>
        </View>
        
        <View style={styles.updatesSection}>
          <Text style={styles.sectionTitle}>Recent Updates</Text>
          <View style={styles.updatesList}>
            {/* Updates content will go here */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TeacherHome;