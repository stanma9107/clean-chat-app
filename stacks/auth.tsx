import { createStackNavigator } from "@react-navigation/stack";
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
    </Stack.Navigator>
  );
};
