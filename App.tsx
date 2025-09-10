import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise2 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Biodata Mahasiswa</Text>
      </View>
      <View>
        <Image
          style={styles.profile}
          source={require('./img/logounklab.jpg')}
        />
      </View>
      <View>
        <Text style={styles.line}>
          ------------------------------------------------------------------------
        </Text>
        <Text style={styles.part1}>Nama: Waworuntu Stivel</Text>
        <Text style={styles.part1}>TTL: Uuwan, 23 September 2003</Text>
        <Text style={styles.part1}>Gender: Laki-Laki</Text>
        <Text style={styles.part1}>Alamat: Dumoga, Uuwan</Text>
        <Text style={styles.part1}>Email: S**@gmail.com</Text>
        <Text style={styles.part1}>Kewarganegaraan: Indonesia</Text>
        <Text style={styles.part1}>Agama: Kristen Protestan, GMIMB</Text>
        <Text style={styles.part1}>Hobi: Memancing</Text>
        <Text style={styles.part1}>Keahlian: Tetap terlihat tenang</Text>
        <Text style={styles.line}>
          ------------------------------------------------------------------------
        </Text>
        <Text style={styles.part2}>
          Nama Kuliah: Universitas Klabat, Airmadidi
        </Text>
        <Text style={styles.part2}>
          Fakultas: Fakultas Ilmu Komputer - Filkom
        </Text>
        <Text style={styles.part2}>Jurusan: Informatika</Text>
        <Text style={styles.part2}>Semester: 8</Text>
        <Text style={styles.part2}>Tingkat: 4</Text>
        <Text style={styles.line}>
          ------------------------------------------------------------------------
        </Text>
        <Text style={styles.part3}>
          1. Apakah kita berkuliah di tempat yang sama?
        </Text>
        <TextInput style={styles.input} placeholder="Enter your answer" />
        <Text style={styles.part3}>
          2. Apakah kita Memiliki hobi yang sama?
        </Text>
        <TextInput style={styles.input} placeholder="Enter your answer" />
        <Text style={styles.part3}>3. Apa keahlian anda?</Text>
        <TextInput style={styles.input} placeholder="Enter your answer" />
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.txt}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closebutton} activeOpacity={0.8}>
          <Text style={styles.closetxt}>Close Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'navy',
    borderColor: 'black',
    borderWidth: 5,
    padding: 20,
    margin: 20,
    borderRadius: 100,
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: 'cyan',
    textAlign: 'center',
  },
  profile: {
    height: 500,
    width: 300,
    margin: 20,
    padding: 20,
  },
  line: {
    fontWeight: 'bold',
  },
  part1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    fontStyle: 'italic',
    marginLeft: 10,
  },
  part2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    fontStyle: 'italic',
    marginLeft: 10,
  },
  part3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    fontStyle: 'italic',
    marginLeft: 10,
  },
  input: {
    borderWidth: 3,
    borderColor: 'black',
    margin: 10,
    fontSize: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'green',
    margin: 20,
    padding: 20,
    borderRadius: 50,
  },
  txt: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  closebutton: {
    backgroundColor: 'red',
    margin: 20,
    padding: 20,
    borderRadius: 50,
  },
  closetxt: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
