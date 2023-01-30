import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'rn-circular-progress' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type RnCircularProgressProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'RnCircularProgressView';

export const RnCircularProgressView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<RnCircularProgressProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
