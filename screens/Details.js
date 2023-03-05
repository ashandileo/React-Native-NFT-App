import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

const Details = () => {
  const navigation = useNavigation();

  return (
    <View style={{ padding: 50 }}>
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Details;
