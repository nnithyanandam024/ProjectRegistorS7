import React from 'react'
import Login from '../Screens/Login/Login'
import AdminDashboard from '../Screens/ADMIN/AdminDashboard/AdminDashboard'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView,SafeAreaProvider } from 'react-native'
const Applayout = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <AdminDashboard/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default Applayout;
