import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const TeacherProjects = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Projects</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.sampleContainer}>
          <Text style={styles.sampleText}>This is a sample Projects page</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  sampleContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 32,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sampleText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#c884fc',
  }
});

export default TeacherProjects;