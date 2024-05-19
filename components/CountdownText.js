// import React from 'react';
// import { Text, StyleSheet } from 'react-native';
// import { COLORS } from './Constants';

// const CountdownText = ({ value }) => {
//   const formattedTime = formatTime(value);

//   return (
//     <Text style={styles.text}>{formattedTime}</Text>
//   );
// };

// const formatTime = (seconds) => {
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;

//   return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
// };

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     color: COLORS.text,
//   },
// });

// export default CountdownText;


import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS } from './Constants';

const CountdownText = ({ value }) => {
  const formattedTime = formatTime(value);

  return (
    <Text style={styles.text}>{formattedTime}</Text>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: COLORS.textCountDown,
  },
});

export default CountdownText;
