import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, points }) => {
  console.log(points)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((point,index)=>(
          <View key={index+point} style={styles.pointWrapper}>
            <View style={styles.pointDot}/>
            <Text style={styles.pointText}>{point}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
