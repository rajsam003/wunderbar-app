import React from 'react';
import {Dimensions, View} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

import {TOTAL_DISTANCE} from '../../../store/contants';
import {COLORS, TextType} from '../../../theme';
import TextView from '../../atoms/textView';
import Styles from './styles';

const Chart = (props) => {
  const names = [];
  const graphdata = [];
  props.data.map((item) => {
    names.push(item.name);
    if (props.title) {
      graphdata.push(item.value / 1000);
    } else {
      graphdata.push(item.value / 3600);
    }
  });

  if(!props.data.length){
    return (
    <View style={Styles.noDataContainer}>
    <TextView
          type={TextType.title}
          style={Styles.chartTitle}
          numberOfLines={1}>
          No data available
        </TextView>
            </View>
    )}

  return (
    <BarChart
      data={{
        labels: names,
        datasets: [
          {
            data: graphdata,
          },
        ],
      }}
      width={Dimensions.get('window').width - 45} // from react-native
      height={220}
      yAxisSuffix={props.title === TOTAL_DISTANCE ? 'km' : 'h'}
      yAxisInterval={1} // optional, defaults to 1
      verticalLabelRotation={90}
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: COLORS.primaryLight,
        backgroundGradientTo: COLORS.primaryLight,
        fillShadowGradient: 'skyblue',
        fillShadowGradientOpacity: 1,
        decimalPlaces: 1, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForVerticalLabels: {
          textAnchor: 'end',
          fontSize:'12',
          y: 208,
          stroke:"white"
        },
        propsForDots: {
          r: '6',
          strokeWidth: '2',
        },
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

export default Chart;
