// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { COLORS } from './Constants';

// const Button = ({ onPress, text, style }) => {
//   return (
//     <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
//       <Text style={styles.buttonText}>{text}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: COLORS.primary,
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: COLORS.text,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Button;


import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from './Constants';

const Button = ({ onPress, text, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 7,
    borderRadius: 5,
    alignItems: 'center',
    borderRadius:10,
  },
  buttonText: {
    color: COLORS.textButton,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
