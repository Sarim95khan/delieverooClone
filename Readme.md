After Setting up the project:

Configuration:

1. add alias for root level path '@'
   "compilerOptions": {
   "strict": true,
   "paths": {
   "@/_": ["./_"]
   }
   },

   Now add tsconfig path in App.json , experiment:
   "experiments": {
   "typedRoutes": true,
   "tsconfigPaths": true
   }

2. Add SafeAreaView to Components for safe area
   Custom Header Design:

3. Make a component of Custom Header

4. Bottom Sheet Modal
   react-native-bottom-sheet by gorhom built with react-native-reanimated

   yarn add @gorhom/bottom-sheet@^4

   yarn add react-native-reanimated react-native-gesture-handler

   update plugin in babel.config.js:
   plugins: [
   // Required for expo-router
   'expo-router/babel',
   'react-native-reanimated/plugin',
   ],
