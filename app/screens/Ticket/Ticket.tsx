import React, { FC, useState } from "react"
import { FlatList, StyleSheet, View, ViewStyle } from "react-native"
import { Button, Header, Screen } from "../../components"
import { colors } from "app/theme/colors"
import { AntDesign } from "@expo/vector-icons"
import { TabBarTicket } from "./components/TabBarTicket"
import { Ticket, TicketItem } from "./components/TicketItem"

export interface TicketScreenProps {}

export const TicketScreen: FC<any> = function TicketScreen(_props) {
  const [tabs, setTabs] = useState(0)
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      title: "Stranger Things",
      date: "15 December 2023",
      image: "https://wallpaperaccess.com/full/1213535.jpg",
      toggle: false,
    },
    {
      title: "Dr Strange",
      date: "13 December 2023",
      image: "https://1.bp.blogspot.com/-mlt46nytc-o/WLm-SVjERcI/AAAAAAABEuE/n9evu45SpIADMhRTXUD87fj0cHUb9IKbACLcB/s1600/doctor%2Bstrange.jpg",
      toggle: true,
    },
    {
      title: "Avatar Last Air Bender",
      date: "12 December 2023",
      image: "https://3.bp.blogspot.com/_TS_qoAGtwac/TCKnHZ-hsEI/AAAAAAAAAmo/K35I7ngEpu4/s1600/avatar-the-last-airbender.jpg",
      toggle: false,
    },
  ])

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <Header title="My Tickets" />
      <TabBarTicket tabs={tabs} setTabs={setTabs} />
      <Button
        style={styles.containerDropdown}
        text="Movie"
        LeftAccessory={() => <View style={styles.invisible} />}
        RightAccessory={() => {
          return <AntDesign name="down" size={20} style={styles.chevronDown} />
        }}
      />
      <FlatList
        data={tickets}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => (
          <TicketItem item={item} tickets={tickets} setTickets={setTickets} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </Screen>
  )
}

const $screenContainer: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  chevronDown: { alignSelf: "flex-end", paddingLeft: "37%" },
  containerDropdown: {
    alignSelf: "center",
    backgroundColor: colors.palette.neutral100,
    borderColor: colors.tint,
    borderWidth: 1,
    marginTop: 20,
    width: "90%",
  },
  content: { paddingBottom: 130 },
  invisible: { flex: 1 },
})
