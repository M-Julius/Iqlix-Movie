import { Text } from "app/components"
import { colors } from "app/theme"
import React, { FC } from "react"
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"

export interface Food {
  title: string
  poster: string
  price: number
}

interface FoodOrderSectionProps {
  foods: Food[]
  title: string
}

export const FoodOrderSection: FC<FoodOrderSectionProps> = (props) => {
  return (
    <View>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.containerScroll} showsHorizontalScrollIndicator={false}>
        {props.foods.map((item, i) => {
          const isLast = i === props.foods.length - 1
          return (
            // eslint-disable-next-line react-native/no-inline-styles
            <View key={i} style={{ marginRight: isLast ? 20 : 10, paddingRight: isLast ? 20 : 0 }}>
              <View style={styles.containerImage}>
                <Image source={{ uri: item.poster }} style={styles.image} />
              </View>
              <Text style={styles.titleItem}>{item.title}</Text>
              <Text size="xxs" style={styles.price}>
                ${item.price.toFixed(2)}
              </Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  containerImage: {
    backgroundColor: colors.palette.neutral300,
    borderRadius: 20,
    height: 150,
    width: 150,
  },
  containerScroll: { paddingLeft: 20 },
  image: { borderRadius: 20, flex: 1, height: 150, width: 150 },
  price: { color: colors.tint, marginVertical: 5 },
  title: { fontWeight: "bold" },
  titleItem: { fontWeight: "bold", marginTop: 5 },
  viewAll: { color: colors.tint },
})
