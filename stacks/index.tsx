import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./auth";

export default () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="auth"
    >
      <Stack.Screen
        name="auth"
        component={AuthStack}
      />
    </Stack.Navigator>
  );
};
