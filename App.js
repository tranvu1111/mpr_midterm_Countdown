// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TextInput,
//   ScrollView,
//   FlatList,
// } from "react-native";
// import { useState } from "react";

// export default function App() {
//   const [enteredGoalText, setEnteredGoalText] = useState("");
//   const [courseGoals, setCourseGoals] = useState([]);

//   function goalInputHandler(enteredText) {
//     setEnteredGoalText(enteredText);
//   }

//   function addGoalHandler() {
//     setCourseGoals((currentCourseGoals) =>
//       [...currentCourseGoals,{text: enteredGoalText, id : Math.random().toString()}]);
//   }

//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Your course goal!"
//           onChangeText={goalInputHandler}
//         />
//         <Button title="Add goal" onPress={addGoalHandler} />
//       </View>
//       <View style={styles.goalContainer}>
//         <FlatList
//           data={courseGoals}
//           renderItem={(itemData) => {
//             return (
//               <View  style={styles.goalItem}>
//                 <Text style={styles.goadText}>{itemData.item.text}</Text>
//               </View>
//             );
//           }}

//           keyExtractor={(item, index) => {
//             return item.id;
//           } }
//           alwaysBounceVertical={false}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     paddingTop: 58,
//     paddingHorizontal: 16,
//   },
//   inputContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 25,
//     borderBottomWidth: 1,
//     borderBlockColor: "#cccccc",
//   },

//   textInput: {
//     borderWidth: 1,
//     borderColor: "#cccccc",
//     width: "70%",
//     marginRight: 8,
//     padding: 8,
//   },

//   goalContainer: {
//     flex: 4,
//   },

//   goalItem: {
//     margin: 8,
//     padding: 8,
//     borderRadius: 6,
//     backgroundColor: "#5e0acc",
//   },

//   goadText: {
//     color: "white",
//   },
// });


import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Button from './components/Button';
import CountdownText from './components/CountdownText';
import { COLORS } from './components/Constants';

const App = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const intervalId = useRef(null);

  useEffect(() => {
    const totalSeconds = Math.max(0, parseInt(minutes) * 60 + parseInt(seconds));
    setCountdown(totalSeconds);
  }, [minutes, seconds]);

  useEffect(() => {
    if (isStarted && countdown > 0) {
      intervalId.current = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 1) {
            return prevCountdown - 1;
          } else {
            clearInterval(intervalId.current);
            setIsStarted(false);
            alert('Countdown finished!');
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId.current);
  }, [isStarted, countdown]);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handlePause = () => {
    setIsStarted(false);
    clearInterval(intervalId.current);
  };

  const handleReset = () => {
    setIsStarted(false);
    clearInterval(intervalId.current);
    setCountdown(minutes * 60 + seconds);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please set a countdown timer</Text>
      <View style={styles.timeInputContainer}>
        <TextInput
          style={styles.timeInput}
          keyboardType="numeric"
          placeholder="MM"
          value={minutes.toString()}
          onChangeText={(text) => setMinutes(parseInt(text) || 0)}
        />
        <Text style={styles.colon}>:</Text>
        <TextInput
          style={styles.timeInput}
          keyboardType="numeric"
          placeholder="SS"
          value={seconds.toString()}
          onChangeText={(text) => setSeconds(parseInt(text) || 0)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button text={ "Start"} onPress={handleStart} style={styles.button} />
        <Button text = {"Pause/Continue"} onPress={isStarted ? handlePause : handleStart} style={styles.midButton}/>
        <Button text="Reset" onPress={handleReset} style={styles.button} />
      </View>
      <CountdownText value={countdown} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.backgroundScreenColor, // Light green background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  timeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  timeInput: {
    fontSize: 30,
    width: 60,
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
    // borderRadius: 5,
    backgroundColor: COLORS.background,
    marginHorizontal: 7,
  },
  colon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  midButton : {
    flex:2,
    marginHorizontal :5,

  }
});

export default App;
