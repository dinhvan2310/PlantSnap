import React from 'react';
import {View} from 'react-native';
interface SpaceComponentProps {
  width?: number;
  height?: number;
}
const SpaceComponent = (props: SpaceComponentProps) => {
  const {width = 0, height = 0} = props;
  return <View style={{width, height}} />;
};

export default SpaceComponent;
