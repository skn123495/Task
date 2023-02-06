import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { dynamicSize } from '../constants/responsive'
export default function SettingsScreen() {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:dynamicSize(20),textAlign:"center"}}>SettingsScreen This screen is only for demo purpose</Text>
  </View>
  )
}

const styles = StyleSheet.create({})