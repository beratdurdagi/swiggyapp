import { FlatList, ScrollView, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import foodtypes from '../data/foodtypes'

const FoodTypes = () => {
    
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator>
      {foodtypes.map((item,index)=>(
        <View key={index} style={{padding:20}}>
            <Image source={{uri:item.image}} style={{width:60,height:60,borderRadius:30}}/>
            <Text style={{marginTop:6,textAlign:'center'}}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default FoodTypes

const styles = StyleSheet.create({})