import React from "react";
import styles from "./nearbyjobcard.style";
import { View, Text, TouchableOpacity, Image } from "react-native";
import CheckImgURL from "../../../../utils/CheckImgURL";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: CheckImgURL(job.employer_logo)
              ? job.employer_logo
              : "https://w7.pngwing.com/pngs/398/363/png-transparent-employment-job-hunting-computer-icons-job-hire-text-logo-employment-thumbnail.png",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.location}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
