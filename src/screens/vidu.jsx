import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.1.7:3000/datadish") // Thay 192.168.1.11 bằng địa chỉ IP của máy
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
        data.map((user) => (
          <View key={user.dishId}>
            <Text>Tên món ăn: {user.dishName}</Text>
            <Text>Calo: {user.calo}</Text>
            <Text>Protein: {user.dificultyLevel}</Text>
          </View>
        ))
      ) : (
        <Text>Không có dữ liệu</Text>
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
