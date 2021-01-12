import { DrawerNavigationProp } from "@react-navigation/drawer"
import { RouteProp } from "@react-navigation/native"


export type RootDrawerParamListType = {
    MainScreen: {test: any};
    AccountScreen: {test: any};
}

type MainScreenNavigationPropsType = DrawerNavigationProp<RootDrawerParamListType, 'MainScreen'>
type MainScreenRoutePropType = RouteProp<RootDrawerParamListType, 'MainScreen'>
 
export type Props = {
    navigation: MainScreenNavigationPropsType;
    route: MainScreenRoutePropType;
}