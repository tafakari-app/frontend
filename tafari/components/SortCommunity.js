import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const SortCommunity = ( {name} ) => {
  return (
    <View className="bg-[#FE8235] rounded-lg py-2 px-3">
        <Text className="text-white font-semibold px-2 py-1">
          {name}
        </Text>
    </View>
  )
}

export default SortCommunity
