import React, { FC } from "react"
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import { colors } from "app/theme"
import { Text } from "app/components"

interface TabBarProps {
  tabs: number
  setTabs: (val: number) => void
}

export const CinemasTabBar: FC<TabBarProps> = ({ tabs, setTabs }: TabBarProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setTabs(0)} style={$tabBar(tabs, 0) as ViewStyle}>
        <Text style={$textTab(tabs, 0) as ViewStyle}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTabs(1)} style={$tabBar(tabs, 1) as ViewStyle}>
        <Text style={$textTab(tabs, 1) as ViewStyle}>Favorites</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: colors.palette.neutral200,
    borderRadius: 60,
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    width: "90%",
  },
})

const $tabBar = (tabs: number, activeTabs: number) => ({
  borderRadius: 40,
  width: "50%",
  backgroundColor: tabs === activeTabs ? colors.tint : colors.transparent,
  alignItems: "center",
  justifyContent: "center",
})

const $textTab = (tabs: number, activeTabs: number) => ({
  fontWeight: "bold",
  color: tabs === activeTabs ? colors.palette.neutral100 : colors.palette.neutral900,
})
