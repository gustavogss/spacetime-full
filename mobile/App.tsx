import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <Text className="p-5 text-2xl text-gray-200">Spacetime Mobile</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
