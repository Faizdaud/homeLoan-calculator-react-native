import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

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

  const [text, onChangeText] = React.useState("Useless");

  return (
    <View style={styles.container}>

<Text style={styles.title}>Home Loan Calculator</Text>

      <Text style={styles.subTitle}>Property Price</Text>
        <TextInput
          style={styles.input}
          value={propertyPrice}
          onChangeText={propertyPrice=> { setPropertyPrice(propertyPrice); }}
          placeholder = "RM"
        />
      <Text style={styles.subTitle}>DownPayment (ex: 4%, 3.5%, etc ....)</Text>
        <TextInput
          style={styles.input}
          value={downPayment}
          onChangeText={downPayment=> { setDownPayment(downPayment); }}
        />
      <Text style={styles.subTitle}>Interest Rate (%)</Text>
        <TextInput
            style={styles.input}
            value={interest}
            onChangeText={interest=> { setInterest(interest); }}
          />
      <Text style={styles.subTitle}>Loan Term (Years)</Text>
        <TextInput
            style={styles.input}
            value={year}
            onChangeText={year=> { setYear(year); }}
          />

      <TouchableOpacity style={styles.button} onPress={calculateLoan} > 
        <Text style={styles.buttonText}>Calculate </Text> 
      </TouchableOpacity> 
      
        <Text style={styles.result}>RM {Math.round(monthlypayment)}</Text> 

          
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  title: {
    color: "#FFCB1F",
    justifyContent: "center",
    alignSelf: "center", 
    marginTop: 50, 
    fontSize: 35  
  },  

  subTitle: {
    color: "black",
    marginTop: 50, 
    fontSize: 35,
    margin: "auto",
    textAlign: "center", 
    width: "50%", 

  }, 

  input: { 
    height: 80, 
    margin: "auto",
    textAlign: "center", 
    width: "50%", 
    fontSize: 50, 
    marginTop: 24, 
    color: "#FFCB1F" ,
    borderWidth: 1,  
  }, 

  buttonText: { 
    alignSelf: "center", 
    padding: 30, 
    fontSize: 25, 
    color: "#FFCB1F", 
    fontWeight: "bold" 
  }, 

    result: { 
      alignSelf: "center",
      color: "#FFCB1F", 
      fontSize: 65, 
      padding: 15 
    }

    

});
