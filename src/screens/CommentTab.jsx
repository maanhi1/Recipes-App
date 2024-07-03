import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

const CommentTab = ({ dishId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.1.23:3000/reviews/${dishId}`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setReviews(response.data);
        } else {
          console.error("Dữ liệu trả về không phải là mảng");
        }
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [dishId]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* count comment */}
        <Text style={styles.countComment}>{reviews.length} Comments</Text>

        {/* list comments */}
        {reviews.map((items, index) => (
          <View key={index} style={styles.commentsContainer}>
            <Image
              style={styles.imageUser}
              source={
                items.imageUser
                  ? { uri: items.imageUser }
                  : require("../../assets/user.jpg")
              }
            />
            <View style={styles.comment}>
              {/*name user*/}
              <Text style={{ fontSize: 17, fontWeight: 700 }}>
                {items.userName}
              </Text>
              {/*comment*/}
              <Text style={{ lineHeight: 25, width: 280 }}>
                {items.comment}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CommentTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  countComment: {
    fontSize: 17,
    fontWeight: "700",
    justifyContent: "center",
    alignItem: "center",
  },
  comment: {
    marginVertical: 50,
    flex: 1,
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
  comment: {
    marginLeft: 10,
  },
});
