import { createStackNavigator } from "@react-navigation/stack";
import ExampleScreen from "../views/example";

export default () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={ExampleScreen}
      />
      <Stack.Screen
        name="Register"
        component={ExampleScreen}
      />
    </Stack.Navigator>
  );
};
