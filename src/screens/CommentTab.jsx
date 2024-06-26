import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export default function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.0.104:3000/reviews")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
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
        <Text style={styles.countComment}>{comments.length} Comments</Text>

        {comments.map((comment, index) => (
          <View key={index} style={styles.commentsContainer}>
            <Image
              style={styles.imageUser}
              source={{ uri: comment.userImage }}
            />
            <View style={styles.comment}>
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
                {comment.username}
              </Text>
              <View style={styles.starsContainer}>
                {renderStars(comment.rating)}
              </View>
              <Text style={{ lineHeight: 25, width: 280 }}>
                {comment.comment}
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
