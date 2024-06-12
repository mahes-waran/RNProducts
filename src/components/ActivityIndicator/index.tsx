import React from 'react';

import { ActivityIndicator } from 'react-native';
import { Colors } from '../../assets/styles/colors/colors';




const ActivityIndicatorLoader = (color = Colors.black, size: any = 'small', style: any) => {
    return <ActivityIndicator color={color} style={style} size={size} />;
};

ActivityIndicatorLoader.propTypes = {
    color: String,
    size: Number || String,
    style: Object,
};
export default ActivityIndicatorLoader;