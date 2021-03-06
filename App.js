import { createAppContainer, createSwitchNavigator } from "react-navigation";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Componn from "./signup/Componn";
import Edit from "./component/Edit";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import first from "./signup/first";
import second from "./signup/second";
import fifth from "./signup/fifth";
import Barcode from "./component/barCode";
//import Barcode from "./redux/Barcode";
import final from "./signup/fian";
import ingredient from "./signup/ingredient";
import nickname from "./signup/nickname";
import { Provider } from "react-redux";
import store from "./redux/store";
const navigator = createBottomTabNavigator({

  signup: createStackNavigator({
    Edit: Edit,
    first: first,
    nickname: nickname,
    second: second,
    fifth: fifth,
    ingredient: ingredient,



  }),

  Barcode: Barcode

})



const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  )

}