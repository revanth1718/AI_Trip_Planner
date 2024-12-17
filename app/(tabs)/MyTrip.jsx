import { StyleSheet, Text, View, ActivityIndicator,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useEffect, useState } from 'react';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';



const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([]);
  

  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.flexRowView}>
        <Text style={styles.title}>My Trip</Text>
        <Ionicons name="add-circle-outline" size={50} color="black" />
      </View>
      
      {userTrips.length === 0 ? <StartNewTripCard /> : null}
    </ScrollView>
  );
};

export default MyTrip;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.white,
    height: '100%',
    paddingTop: 40,
    padding: 25,
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 30,
    marginTop: 30,
  },
  flexRowView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
