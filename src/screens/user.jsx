import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.0.104:3000/datauser")
      .then((response) => {
        console.log(response.data);
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error("Dữ liệu trả về không phải là mảng");
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Danh sách món ăn:</Text>
      {data.length > 0 ? (
        data.map((items) => (
          <View key={items.userId}>
            <Text>username: {items.userName}</Text>
            <Text>account: {items.accountName}</Text>
            <Text>pass: {items.password}</Text>
          </View>
        ))
      ) : (
        <Text>KHông</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
