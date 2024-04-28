import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productData = require("../../data.json");
    const uniqueCategories = [
      ...new Set(productData.products.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
    setProducts(productData.products);
  }, []);

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const windowWidth = Dimensions.get("window").width;

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              paddingBottom: 20,
              paddingTop: 50,
              paddingHorizontal: windowWidth * 0.05,
            }}
          >
            <Text style={{ fontSize: windowWidth * 0.08, fontWeight: 'bold', color: '#333' }}>
              Fast & Delicious Food
            </Text>
            <Text
              style={{ fontSize: windowWidth * 0.08, fontWeight: 'bold', color: '#333' }}
            >
              You <Text style={{ color: "#FF0303" }}>Love</Text>
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => selectCategory(category)}
                style={{
                  alignItems: "center",
                  padding: windowWidth * 0.02,
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    overflow: "hidden",
                    backgroundColor:
                      selectedCategory === category
                        ? "#f64e32"
                        : "transparent",
                  }}
                >
                  <Image
                    source={{
                      uri:
                        category === "Food"
                          ? "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          : "https://images.unsplash.com/photo-1625865019845-7b2c89b8a8a9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    }}
                    style={{
                      width: windowWidth * 0.25,
                      height: windowWidth * 0.25,
                      borderRadius: windowWidth * 0.125,
                      margin: windowWidth * 0.01,
                    }}
                  />
                </View>
                <Text style={{ paddingTop: 5, fontSize: windowWidth * 0.04, fontWeight: 'bold' }}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View>
            {filteredProducts.map((product, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Product", { product })}
                style={{ padding: windowWidth * 0.02 }}
              >
                <View
                  style={{
                    padding: windowWidth * 0.02,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: product.image }}
                    style={{ width: "100%", height: windowWidth * 0.625 }}
                  />
                  <Text style={{ paddingTop: windowWidth * 0.03, fontSize: windowWidth * 0.04, fontWeight: 'bold' }}>{product.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
