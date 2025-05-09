import React from 'react'
import { SafeAreaProvider} from 'react-native-safe-area-context'
import AppLayout from './src/navigation/AppLayout'
import { StatusBar } from 'react-native'

const App = () => {
  return (
    <SafeAreaProvider >
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />
      <AppLayout />
    </SafeAreaProvider>
  )
}

export default App
