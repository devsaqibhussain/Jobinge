import React from "react";
import { View, Text, Image } from "react-native";
import CheckImgURL from "../../../utils/CheckImgURL";
import styles from "./company.style";
import { icons } from "../../../constants";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: CheckImgURL(companyLogo)
              ? companyLogo
              : "https://w7.pngwing.com/pngs/398/363/png-transparent-employment-job-hunting-computer-icons-job-hire-text-logo-employment-thumbnail.png",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} /</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
