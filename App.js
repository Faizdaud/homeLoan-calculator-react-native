import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';


const image = require("./assets/house.png");

export default function App() {

  
  const [year,setYear] = useState(0);
  const [interest,setInterest] = useState(0);
  const [propertyPrice,setPropertyPrice] = useState(0);
  const [downPayment,setDownPayment] = useState(0);
  const [monthlypayment,setMonthlyPayment] = useState(0);

  const calculateLoan = () => {

  let annualInterest = interest/100 ;
  let dp = propertyPrice * (downPayment/100);
  let amount = propertyPrice - dp;
  let discount = (Math.pow((1 + annualInterest), year) -1 ) / (annualInterest * (Math.pow(1+annualInterest,year)));
  let yearlypayment = amount / discount;
  let monthlypayment = yearlypayment/12;
  setMonthlyPayment(monthlypayment );
  }

  return (

  
<ImageBackground source={image} style={styles.image} imageStyle={{ opacity: 0.5 }} >
    <View style={styles.container}>



        <Text style={styles.title}>Home Loan Calculator</Text>

            <View style={styles.wrapper}>
                <Text style={styles.subTitle}>Property Price</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="RM" 
                    placeholderTextColor="grey"
                    keyboardType = "numeric"
                    // value={String(propertyPrice)}
                    onChangeText={propertyPrice=> { setPropertyPrice(propertyPrice); }}
                    placeholder = "RM"
                  />
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.subTitle}>DownPayment (%)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="max 2 decimals" 
                  placeholderTextColor="grey"
                  keyboardType = "numeric"
                  // value={String(downPayment)}
                  onChangeText={downPayment=> { setDownPayment(downPayment); }}
                />
            </View>  

    <View style={styles.wrapper}>
      <Text style={styles.subTitle}>Interest Rate (%)</Text>
        <TextInput
            style={styles.input}
            keyboardType = "numeric"
            placeholder="max 2 decimals" 
            placeholderTextColor="grey"
            // value={String(interest)}
            onChangeText={interest=> { setInterest(interest); }}
          />
    </View>

    <View style={styles.wrapper}>
      <Text style={styles.subTitle}>Loan Term (Years)</Text>
        <TextInput
            style={styles.input}
            keyboardType = "numeric"
            value={String(year)}
            onChangeText={year=> { setYear(year); }}
          />
    </View>

      <TouchableOpacity style={styles.button} onPress={calculateLoan} > 
        <Text style={styles.buttonText}>Calculate</Text> 
      </TouchableOpacity> 

      
      
      <Text style={styles.subTitle}>Your Monthly Payment:</Text>
      <Text style={styles.result}>RM {Math.round(monthlypayment)}</Text> 

          
      <StatusBar style="auto" />

      
    </View>

    </ImageBackground>

  

  );
}

const styles = StyleSheet.create({

  image: { 
    flex: 1,
    // width: "100%",
    // height: "100%", 
    resizeMode:"cover",
    backgroundColor: '#004466',
    justifyContent: 'center',

  },

  container: {
    flex: 1,
    // backgroundColor: '#0099e6',
    alignItems: 'center',
  },

  title: {
    color: "#FFCB1F",
    justifyContent: "center",
    alignSelf: "center", 
    marginTop: 50, 
    fontSize: 30,  
    fontWeight: "bold" ,
  },  

  wrapper: {
    flexDirection:'row', 
    flexWrap:'wrap',
    alignItems:"center",
    // borderWidth: 2, 
    marginTop: 15,
  },

  subTitle: {
    color: "#FFCB1F",
    marginTop: 10, 
    fontSize: 16,
    margin: "auto",
    marginBottom: 10,
    textAlign: "center", 
    width: "35%",
    fontWeight: "bold" ,
    // borderWidth: 1,   

  }, 

  input: { 
    height: 40, 
    margin: 10,
    textAlign: "center", 
    width: "45%", 
    fontSize: 17,  
    color: "black" ,
    borderRadius: 10,
    borderWidth: 2,  
    backgroundColor: "white",
  }, 

  buttonText: { 
    alignSelf: "center",
    margin: 20, 
    padding: 10, 
    fontSize: 25, 
    color: "#FFCB1F", 
    fontWeight: "bold" ,
    borderRadius: 15,
    backgroundColor: "blue",
  }, 

    result: { 
      alignSelf: "center",
      color: "#FFCB1F", 
      fontSize: 45, 
      padding: 15 
    }

    

});
