import React, { FC } from "react"
import { colors } from "app/theme"
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import { Text } from "app/components"

interface TabBarTicketProps {
  tabs: number
  setTabs: (val: number) => void
}

export const TabBarTicket: FC<TabBarTicketProps> = ({ tabs, setTabs }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setTabs(0)} style={$tabSoon(tabs, 0) as ViewStyle}>
        <Text style={$textActive(tabs, 0) as ViewStyle}>Soon</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTabs(1)} style={$tabSoon(tabs, 1) as ViewStyle}>
        <Text style={$textActive(tabs, 1) as ViewStyle}>Done</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTabs(2)} style={$tabSoon(tabs, 2) as ViewStyle}>
        <Text style={$textActive(tabs, 2) as ViewStyle}>Cancel</Text>
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
    marginTop: 15,
    width: "90%",
  },
})

const $tabSoon = (tabs: number, tabActive: number) => ({
  borderRadius: 40,
  width: "30%",
  backgroundColor: tabs === tabActive ? colors.tint : colors.transparent,
  alignItems: "center",
  justifyContent: "center",
})

const $textActive = (tabs: number, tabActive: number) => ({
  fontWeight: "bold",
  color: tabs === tabActive ? colors.palette.neutral100 : colors.palette.neutral900,
})
