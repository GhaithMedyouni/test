import React, { useEffect } from 'react';
import { create, useTheme } from '@amcharts/amcharts4/core';
import { PieChart as AmPieChart, PieSeries } from '@amcharts/amcharts4/charts';
import AnimatedTheme from '@amcharts/amcharts4/themes/animated';

interface PieChartProps {
  data: { category: string; value: number }[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  // Appliquer le thème ici au début du composant
  useTheme(AnimatedTheme);

  useEffect(() => {
    const chart = create('pieChartDiv', AmPieChart);

    chart.data = data;

    const series = chart.series.push(new PieSeries());
    series.dataFields.value = 'value';
    series.dataFields.category = 'category';
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;
    series.slices.template.tooltipText = '{category}: {value}';

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div id="pieChartDiv" style={{ width: '100%', height: '500px' }}></div>;
};

export default PieChart;
