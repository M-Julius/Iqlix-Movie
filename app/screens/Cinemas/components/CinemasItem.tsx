import { Rating } from "@kolking/react-native-rating"
import { Text } from "app/components"
import { colors } from "app/theme"
import React, { FC } from "react"
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { AntDesign, Entypo } from "@expo/vector-icons"

export interface Cinemas {
  id: number
  title: string
  poster: string
  rate: number
  review: string
  direction: string
  location: string
  isFavorite: boolean
}

interface CinemasItemProps {
  item: Cinemas
  cinemas: Cinemas[]
  setCinemas: (cinemas: Cinemas[]) => void
}

export const CinemasItem: FC<CinemasItemProps> = ({ item, cinemas, setCinemas }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.poster }} style={styles.image} />
      <View style={styles.containerColumn}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.containerRow}>
            <Rating
              disabled
              maxRating={5}
              variant="stars"
              size={17}
              rating={item.rate}
              baseColor="#ffdfaf"
              fillColor="#fc9701"
            />
            <Text style={styles.textRate}>
              {item.rate}{" "}
              <Text size="xxs" style={{ color: colors.palette.neutral500 }}>
                ({item.review} reviews)
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.rowBetweenCenter}>
          <View style={styles.containerLocation}>
            <Entypo name="location-pin" size={24} color={colors.tint} />
            <Text>
              {item.direction}{" "}
              <Text size="xs" style={{ color: colors.palette.neutral500 }}>
                ({item.location})
              </Text>
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              const newCinemas = cinemas.map((cinema) => {
                if (cinema.id === item.id) {
                  return { ...cinema, isFavorite: !cinema.isFavorite }
                }
                return cinema
              })
              setCinemas(newCinemas)
            }}
          >
            <AntDesign
              name={!item.isFavorite ? "hearto" : "heart"}
              size={24}
              color={item.isFavorite ? colors.error : colors.palette.neutral500}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
    containerColumn: { flexDirection: "column", justifyContent: "space-between", width: "60%" },
    containerLocation: { alignItems: "center", flexDirection: "row" },
    containerRow: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    },
    image: { borderRadius: 20, height: 140, width: "35%" },
    rowBetweenCenter: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    textRate: { fontWeight: "bold" },
    title: { fontSize: 20, fontWeight: "bold" },
  })