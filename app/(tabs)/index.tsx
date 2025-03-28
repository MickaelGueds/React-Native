import { SafeAreaViewComponent, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from '@/modules/login';

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <Login/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
