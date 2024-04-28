import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function ProductScreen({ route, navigation }) {
  const { product } = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          top: 55,
          left: 20,
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 25,
          padding: 5,
        }}
      >
        <TouchableOpacity onPress={goBack}>
          <Icon name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          top: 55,
          right: 20,
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 25,
          padding: 5,
        }}
      >
        <TouchableOpacity>
          <Icon name="share-social" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          top: 55,
          right: 80,
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 25,
          padding: 5,
        }}
      >
        <TouchableOpacity>
          <Icon name="heart-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: product.image }}
        style={{ width: "100%", height: 350 }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        {product.name}
      </Text>
      <View style={{ paddingLeft: 10 }}>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Icon
            name="albums-outline"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text style={{ fontSize: 18 }}>Category: {product.category}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name="document-text-outline"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text style={{ fontSize: 18 }}>
            Description: {product.description}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name="pricetags-outline"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text style={{ fontSize: 18 }}>Price: {product.price}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name="star-outline"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text style={{ fontSize: 18 }}>Rating: {product.rating}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name="chatbox-ellipses-outline"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text style={{ fontSize: 18 }}>Reviews: {product.reviews}</Text>
        </View>
      </View>
      <View style={{ paddingTop: 40 }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f64e32",
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
