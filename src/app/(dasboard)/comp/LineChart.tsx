import React, { useEffect } from 'react';
import { create, useTheme } from '@amcharts/amcharts4/core';
import { XYChart, DateAxis, ValueAxis, LineSeries, XYCursor, XYChartScrollbar } from '@amcharts/amcharts4/charts';
import AnimatedTheme from '@amcharts/amcharts4/themes/animated'; // Corrected import for default export

interface LineChartProps {
  data: { date: string; value: number }[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  useEffect(() => {
    // Apply the animated theme
    useTheme(AnimatedTheme);

    const chart = create('lineChartDiv', XYChart);

    chart.data = data;
    chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';

    const dateAxis = chart.xAxes.push(new DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.labels.template.rotation = 45;
    dateAxis.renderer.labels.template.verticalCenter = 'middle';

    const valueAxis = chart.yAxes.push(new ValueAxis());
    valueAxis.renderer.labels.template.adapter.add('text', (text) => {
      return `${text}`;
    });

    const series = chart.series.push(new LineSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.dateX = 'date';
    series.tooltipText = '{valueY}';

    chart.cursor = new XYCursor();
    chart.scrollbarX = new (XYChartScrollbar); // Corrected scrollbar usage

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div id="lineChartDiv" style={{ width: '100%', height: '500px' }}></div>;
};

export default LineChart;
