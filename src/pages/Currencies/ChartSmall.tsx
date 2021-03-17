import React, { FC } from 'react'
import ReactApexChart from 'react-apexcharts'
import {SeriesType } from "../../store/currencies/reducer";

type PropsType = {
    series: Array<{data:SeriesType[]}> 
}  



const ChartSmall:FC<PropsType> = ({series}) => {
  const series1 = [{
        name: 'Likes',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
      }]
    const options = {
        chart: { toolbar: !1, zoom: { enabled: !0 } },
      stroke: {
        width: 4,
        curve: 'smooth'
      },
     
     
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [ '#5AFF5C'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [10, 40, 60, 100]
        },
      },
      yaxis:{
        show:false,
       
    },
    xaxis: {
        
            floating: true,
            axisTicks: {
              show: false
            },
            axisBorder: {
              show: false
            },
            labels: {
              show: false
            },
          
      }

      
      }

    return (
      
            <ReactApexChart
            options={options}
            series={series}
            type='line'
            height={60}
            />
        
    )
}

export default ChartSmall
