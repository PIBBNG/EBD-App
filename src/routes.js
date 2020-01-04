import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from './pages/main';

const RootStack = createStackNavigator({
    Home: {
        screen: Main
    }
})

const App = createAppContainer(RootStack);

export default App;
