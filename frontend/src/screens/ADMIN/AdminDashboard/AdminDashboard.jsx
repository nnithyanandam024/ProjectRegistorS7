import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Logout from '../../../Assests/log-out.svg';
import AdminNavBar from '../../AdminNavbar/AdminNavBar';
const StatBox = ({ title, value, bgColor }) => {
  return (
    <View style={[styles.statBox, { backgroundColor: bgColor }]}>
      <Text style={styles.statTitle}>{title}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
};

const AdminDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Admin DashBoard</Text>
        <TouchableOpacity style={styles.logoutButton}>
          <Logout width={24} height={24} />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content}>
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
        
        <View style={styles.updatesSection}>
          <Text style={styles.sectionTitle}>Recent Updates</Text>
          <View style={styles.updatesList}>
            {/* Updates content will go here */}
          </View>
        </View>
      </ScrollView>
      
      <AdminNavBar activeTab="Home" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  statsContainer: {
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statBox: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statTitle: {
    fontSize: 14,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  deadlinesSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  updatesSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  deadlinesList: {
    minHeight: 100,
  },
  updatesList: {
    minHeight: 100,
  },
});

export default AdminDashboard;