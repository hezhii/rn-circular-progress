import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React, { memo, useMemo } from 'react';
import Svg, { Circle, Linecap } from 'react-native-svg';

interface Props {
  style?: StyleProp<ViewStyle>;
  radius?: number;
  strokeWidth?: number;
  strokeLinecap?: Linecap;
  backgroundTrackColor?: string; // 底部轨道颜色
  trackColor?: string;
  progress?: number;
}

const CircularProgress: React.FC<Props> = ({
  style,
  radius = 100,
  strokeWidth = 10,
  strokeLinecap,
  backgroundTrackColor = '#d8d8d8',
  trackColor = '#fff',
  progress = 0,
}) => {
  const dasharray = useMemo(() => [Math.PI * 2 * radius], [radius]);
  const newProgress = Math.min(Math.max(progress, 0), 100);
  const offest = Math.PI * 2 * radius * (1 - newProgress / 100);

  // 获取除半径外额外的大小，线宽*2
  const _getExtraSize = () => {
    return strokeWidth * 2;
  };

  const svgSize = radius * 2 + _getExtraSize();
  const center = svgSize / 2;
  return (
    <View style={[styles.container, style]}>
      <Svg width={svgSize} height={svgSize}>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={backgroundTrackColor}
          strokeWidth={strokeWidth}
        />
        <Circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          origin={`${center},${center}`}
          rotation={-90}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          strokeDasharray={dasharray}
          strokeDashoffset={offest}
          strokeLinecap={strokeLinecap}
        />
      </Svg>
    </View>
  );
};

export default memo(CircularProgress);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
