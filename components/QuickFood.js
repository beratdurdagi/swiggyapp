import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import quickfood from '../data/quickfood'
import { MaterialIcons } from "@expo/vector-icons";

const QuickFood = () => {
    const data=quickfood;
  return (
   
    <View >
        <View style={{ margin:10 }}>
        <Text style={{ fontSize: 17, color: "black", fontWeight: "bold" }}>
          Get it Quickly
        </Text>
      </View>
    <ScrollView horizontal showsHorizontalScrollIndicator>
        {data.map((item,index)=>(

            <Pressable key={index} style={{margin:3,borderRadius:5}}>
                <ImageBackground imageStyle={{borderRadius:10}} source={{uri:item.image}} style={{aspectRatio:5/6,height:170,}}/>
                <Text style={{position:'absolute',color:'white',left:10,bottom:60,fontSize:27,fontWeight:'900'}}>{item.offer} OFF</Text>
                
                <Text style={{fontSize:17,color:'black',marginTop:10}}>{item.name}</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <MaterialIcons name='stars' size={20} color={'green'}/>
                <Text style={{fontSize:20,color:'black'}}>{item.rating}.{item.time}</Text>
                </View>
                
            </Pressable>
        ))}
    </ScrollView>
    </View>
  )
}

export default QuickFood

const styles = StyleSheet.create({})