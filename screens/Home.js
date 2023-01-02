

import {View,Button,Text,StyleSheet} from 'react-native'

const HomeScreen=({navigation})=>{

   return(
 <View style={{flex:1,flexDirection:'row',justifyContent:"space-evenly",alignItems:'center', backgroundColor: '#000300'}}>
 
  <Button style={styles.btn}title='Contact Me' onPress={()=>
 navigation.navigate('contact')
}/>
<Button title='About ME' onPress={()=>
 navigation.navigate('about')
}/>

 </View>


   );






}
export default HomeScreen
const styles=StyleSheet.create({
 btn:{
  color:'#000300',
  borderRadius:5


 }




});