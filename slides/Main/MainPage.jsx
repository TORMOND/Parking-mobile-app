import { 
    SafeAreaView,
    TextInput, 
    View, 
    Button, 
    Text ,
    ImageBackground,
    ScrollView
  } from 'react-native'
  import styles from './MainPage.styles'

const MainPage = ()=>{
return(
    <SafeAreaView style={styles.container}>
        <View style={styles.NavBar}>
            <View style={styles.profile}>

            </View>
        </View>
        <View>
           <Text>Hi,</Text>
           <TextInput />
        </View>
      <ScrollView 
      showsHorizontalScrollIndicator={false} 
      style={styles.horizontalScroll}
      >
        <View style={styles.ScrollElements}>
        <Text>Ticket</Text>
        </View>
        <View style={styles.ScrollElements}>
        <Text></Text>
        </View>
        <View style={styles.ScrollElements}>
        <Text>Map</Text>
        </View>
        <View style={styles.ScrollElements}>
        <Text>History</Text>
        </View>
        <View style={styles.ScrollElements}>
        <Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
)
}

export default MainPage;