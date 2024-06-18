import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* count comment */}
        <Text style={styles.countComment}>5 Comments</Text>

        {/* list comments */}
        <View>
          <View style={styles.commentsContainer}>
            <Image
              style={styles.imageUser}
              source={require("../../assets/image.jpg")}
            />
            <View style={styles.comment}>
              {/*name user*/}
              <Text style={{ fontSize: 17, fontWeight: 700 }}>Mai Anh</Text>
              {/*comment*/}
              <Text style={{ lineHeight: 25, width: 280 }}>
                Đã thử, ngon điên. Mọi người nên thửs
              </Text>
            </View>
          </View>

          <View style={styles.commentsContainer}>
            <Image
              style={styles.imageUser}
              source={require("../../assets/image.jpg")}
            />
            <View style={styles.comment}>
              {/*name user*/}
              <Text style={{ fontSize: 17, fontWeight: 700 }}>Mai Anh</Text>
              {/*comment*/}
              <Text style={{ lineHeight: 25, width: 280 }}>
                Tui mới làm thử, ngon thiệttt. Công thức này đáng để thử haha.
                Để bữa nào thử lại lần nữa =))
              </Text>
            </View>
          </View>

          <View style={styles.commentsContainer}>
            <Image
              style={styles.imageUser}
              source={require("../../assets/image.jpg")}
            />
            <View style={styles.comment}>
              {/*name user*/}
              <Text style={{ fontSize: 17, fontWeight: 700 }}>Mai Anh</Text>
              {/*comment*/}
              <Text style={{ lineHeight: 25, width: 280 }}>
                Công thức đỉnh luôn mọi người ơi. Tui cũng ở Việt Nam nè
                hihihiiiiiiiiiiiiiii
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

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
