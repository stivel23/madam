import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise3 = () => {
  return (
    <View>
      <View>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View style={styles.top}>
        <Text style={styles.titles}>Username</Text>
        <TextInput style={styles.input} placeholder="Masukan username anda" />
      </View>
      <View>
        <Text style={styles.titles}>Password</Text>
        <TextInput style={styles.input} placeholder="Masukan password anda" />
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.txt}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: '700',
    color: 'black',
    marginLeft: 20,
  },
  input: {
    borderWidth: 3,
    borderColor: 'grey',
    margin: 10,
    fontSize: 20,
    borderRadius: 10,
    marginLeft: 20,
  },
  button: {
    backgroundColor: 'navy',
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
  titles: {
    fontSize: 20,
    fontWeight: 'thin',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 10,
  },
  txt: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 500,
  },
  style: {
    paddingTop: 100,
  },
});
