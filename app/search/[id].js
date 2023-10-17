import React from 'react'
import { Text,View,SafeAreaView } from 'react-native'
import { Stack, useGlobalSearchParams } from 'expo-router'
import { COLORS } from '../../constants'

const SearchPage = () => {
  const params = useGlobalSearchParams()
  return (
    <SafeAreaView>
        <Stack.Screen
            options={{
              headerStyle:{backgroundColor:COLORS.lightWhite},
              headerTitle:`Search results for: ${params.id}`
            }}
        />
        <Text>
            SearchPage
        </Text>
    </SafeAreaView>
  )
}

export default SearchPage