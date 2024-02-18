import { colors } from "app/theme"
import React, { FC } from "react"
import { Image, StyleSheet, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { Text, Toggle } from "app/components"

export interface Ticket {
  title: string
  date: string
  image: string
  toggle: boolean
}

interface TicketItemProps {
  item: Ticket
  tickets: Ticket[]
  setTickets: (tickets: Ticket[]) => void
}

export const TicketItem: FC<TicketItemProps> = ({ item, tickets, setTickets }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.subContainer}>
        <View style={styles.headerItemContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.containerDate}>
            <AntDesign name="calendar" color={colors.tint} size={20} />
            <Text size="xs" style={{ color: colors.palette.neutral500 }}>
              {" "}
              {item.date}
            </Text>
          </View>
        </View>
        <View style={styles.containerRowBetween}>
          <Text size="xxs" style={{ color: colors.palette.neutral600 }}>
            Notification active {"\n"}to reminds
          </Text>
          <Toggle
            inputOuterStyle={{ backgroundColor: colors.palette.neutral300 }}
            inputInnerStyle={{ backgroundColor: colors.palette.neutral500 }}
            inputDetailStyle={{ backgroundColor: colors.palette.neutral100 }}
            accessibilityIgnoresInvertColors={false}
            variant="switch"
            value={item.toggle}
            onValueChange={(val) => {
              const newTickets = tickets.map((ticket, index) => {
                if (index === 0) {
                  ticket.toggle = val
                }
                return ticket
              })
              setTickets(newTickets)
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: colors.palette.neutral100,
    borderRadius: 20,
    elevation: 1,
    flexDirection: "row",
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 18,
    width: "90%",
  },
  containerDate: { alignItems: "center", flexDirection: "row", marginTop: 10 },
  containerImage: {
    backgroundColor: colors.palette.accent100,
    borderRadius: 10,
    height: 130,
    marginRight: 10,
    width: "30%",
  },
  containerRowBetween: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerItemContainer: {
    borderBottomColor: colors.palette.neutral300,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  image: { borderRadius: 10, height: 130, width: "100%" },
  subContainer: { flexDirection: "column", justifyContent: "space-between", width: "67%" },
  title: { fontWeight: "bold" },
})
