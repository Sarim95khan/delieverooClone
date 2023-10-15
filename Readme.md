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
