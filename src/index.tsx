import { HostComponent, requireNativeComponent } from 'react-native';

type SwiftUIComponentProps = {};

const SwiftUIStarter = requireNativeComponent(
  'SwiftUIStarter'
) as HostComponent<SwiftUIComponentProps>;

export default SwiftUIStarter;
