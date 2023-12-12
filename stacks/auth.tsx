import { createStackNavigator } from "@react-navigation/stack";
import ExampleScreen from "../views/example";
import WelcomeScreen from "../views/welcome";

export default () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
      />
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
