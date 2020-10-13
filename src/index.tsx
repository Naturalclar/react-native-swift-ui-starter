import { NativeModules } from 'react-native';

type SwiftUiStarterType = {
  multiply(a: number, b: number): Promise<number>;
};

const { SwiftUiStarter } = NativeModules;

export default SwiftUiStarter as SwiftUiStarterType;
