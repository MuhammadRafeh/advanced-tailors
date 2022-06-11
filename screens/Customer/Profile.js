import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StylishSmallCards from '../../components/StylishSmallCards';
import colors from '../../constants/colors';
import Button from '../../components/Button';

const Profile = props => {
  return (
    <View style={styles.screen}>
      <View style={{ marginTop: '4%', paddingHorizontal: 7, height: '6%' }}>
        <Text style={{ fontSize: 35, fontWeight: 'bold' }} numberOfLines={1} adjustsFontSizeToFit={true}>
          My profile
        </Text>
      </View>
      <View style={styles.personalDetails}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 16.5 }}>Personal details</Text>
          </View>
          <View>
            <Text style={{ color: colors.primary }}>change</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', padding: 10, borderRadius: 15, backgroundColor: 'white', flex: 5 }}>
          <View style={{ flex: 1 }}>
            <View style={styles.dp} />
          </View>
          <View style={{ flex: 1.7, paddingTop: 4, paddingBottom: 5, paddingLeft: 3 }}>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
                Shikari Master.
              </Text>
            </View>
            <View>
              <Text style={styles.personalDetailsText}>
                shikari@gmail.com
              </Text>
            </View>
            <View style={styles.line} />
            <View>
              <Text style={styles.personalDetailsText} numberOfLines={2} adjustsFontSizeToFit={true}>
                +92 3025894071
              </Text>
            </View>
            <View style={styles.line} />
            <View style={{ flex: 1 }}>
              <Text style={styles.personalDetailsText} adjustsFontSizeToFit={true}>
                400 Colony hattar Estate Industries Haripur from Pakistan
              </Text>
            </View>
          </View>
        </View>
      </View>

      <StylishSmallCards text={'Orders'} style={{ marginTop: '6.9%' }} />
      <StylishSmallCards text={'Pending reviews'} />
      <StylishSmallCards text={'Faq'} />
      <StylishSmallCards text={'Help'} />
      <Button style={styles.button} label={'Update'} />
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgb(245,245,248)',
    paddingHorizontal: 36,
    height: '100%'
  },
  personalDetails: {
    marginTop: "10%",
    height: '30%'
  },
  dp: {
    height: '60%',
    padding: 8,
    width: '90%',
    backgroundColor: 'rgb(196,196,196)',
    borderRadius: 10
  },
  personalDetailsText: {
    color: 'rgb(135,135,135)'
  },
  line: {
    height: '.3%',
    width: '100%',
    backgroundColor: 'rgb(135,135,135)',
    marginVertical: 4
  },
  button: {
    height: '8%',
    marginTop: '10%'
  }
})