import { View, Text, StyleSheet } from 'react-native';

export default function DunhaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à aba Dunha!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});