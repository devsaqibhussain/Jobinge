import React, { useState, useCallback } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  Specifics,
} from "../../components";
import { COLORS,SIZES } from "../../constants";
import useFetch from "../../hooks/useFetch";

const tabs = ["About", "Qualifications", "Responsibilities"];
const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0])
  
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });
  
  const onRefresh = useCallback(()=>{
    setRefreshing(true);
    refetch();
    setRefreshing(false)
  },[])
  const displayTabContent = ()=>{
    switch (activeTab){
      case tabs[0]:
        return <JobAbout
          info = {data[0].job_description ?? ["No data provided"]}
        />
        break;
      case tabs[1]:
        return <Specifics
          title={tabs[1]}
          points = {data[0].job_highlights?.Qualifications ?? ["N/A"]}
        />
      case tabs[2]:
        return <Specifics
          title={tabs[2]}
          points = {data[0].job_highlights?.Responsibilities ?? ["N/A"]}
        />
      default:
        break;
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: COLORS.lightWhite,
          headerTitle: "",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data</Text>
        ) : (
          <View style={{padding: SIZES.medium, paddingBottom: 100}}>
            <Company
                companyLogo = {data[0].employer_logo}
                jobTitle = {data[0].job_title}
                companyName = {data[0].employer_name}
                location = {data[0].job_country}
            />
            <JobTabs
              tabs ={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {displayTabContent()}
          </View>
        )}
      </ScrollView>
      <JobFooter url={data[0]?.job_apply_link}/>
    </SafeAreaView>
  );
};

export default JobDetails;
