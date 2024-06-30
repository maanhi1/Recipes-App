import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.0.104:3000/reviews")
      .then((response) => {
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

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - filledStars - halfStar;

    let stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<Icon key={i} name="star" size={15} color="#ffd700" />);
    }

    if (halfStar === 1) {
      stars.push(
        <Icon key="half" name="star-half-full" size={15} color="#ffd700" />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Icon key={`empty-${i}`} name="star-o" size={15} color="#ffd700" />
      );
    }

    return stars;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.countComment}>{data.length} Bình luận</Text>

        {data.map((review, index) => (
          <View key={index} style={styles.commentsContainer}>
            {/* Hiển thị hình ảnh người dùng */}
            <Image
              style={styles.imageUser}
              source={require("../../assets/image.jpg")} // Đảm bảo review.userImage được cung cấp đúng
            />
            <View style={styles.comment}>
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
                {review.userName}
              </Text>
              <View style={styles.starsContainer}>
                {renderStars(review.rating)}{" "}
                {/* Hiển thị các biểu tượng sao dựa trên đánh giá */}
              </View>
              <Text style={{ lineHeight: 25, width: 280 }}>
                {review.comment} {/* Hiển thị bình luận */}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  countComment: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 10,
  },
  comment: {
    marginLeft: 10,
  },
  imageUser: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  commentsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  starsContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
});
