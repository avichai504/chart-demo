// src/app/demo/page.js
import LineChartComponent from '../../component/Line'
import PieChartComponent from '../../component/Pie'
import DoughnutChartComponent from '../../component/Doughnut'
import RadarChartComponent from '../../component/Radar'
import PolarAreaChartComponent from '../../component/Polar'
import BubbleChartComponent from '../../component/Bubble'
import ScatterChartComponent from '../../component/Scatter'
import HorizontalBarChartComponent from '../../component/HorizontalBar'
import MixedChartComponent from '../../component/Mixed'

const ChartsPage = () => {
  return (
    <div className='bg-gray-100 p-10'>
      <h1 className='text-black text-3xl font-bold text-center mb-10'>Charts Showcase</h1>
      <div className='space-y-10'>
        <div className='max-w-[60%] p-4 bg-white rounded-lg shadow-lg'>
          <h2 className='text-black text-xl font-semibold mb-4 text-center'>Line Chart</h2>
          <LineChartComponent />
        </div>
        <div className='max-w-[60%] p-4 bg-white rounded-lg shadow-lg'>
          <h2 className='text-black text-xl font-semibold mb-4 text-center'>Pie Chart</h2>
          <PieChartComponent />
        </div>
        <div className='max-w-[60%] p-4 bg-white rounded-lg shadow-lg'>
          <h2 className='text-black text-xl font-semibold mb-4 text-center'>Doughnut Chart</h2>
          <DoughnutChartComponent />
        </div>
        <div className='max-w-[60%] p-4 bg-white rounded-lg shadow-lg'>
          <h2 className='text-black text-xl font-semibold mb-4 text-center'>Radar Chart</h2>
          <RadarChartComponent />
        </div>
        <div className='max-w-[60%] p-4 bg-white rounded-lg shadow-lg'>
          <h2 className='text-black text-xl font-semibold mb-4 text-center'>Polar Area Chart</h2>
          <PolarAreaChartComponent />
        </div>
        <div className='max-w-[60%] p-4 bg-white rounded-lg shadow-lg'>
          <h2 className='text-black text-xl font-semibold mb-4 text-center'>Bubble Chart</h2>
          <BubbleChartComponent />
        </div>
        <div className='max-w-[60%] p-4 bg-white rounded-lg shadow-lg'>
          <h2 className='text-black text-xl font-semibold mb-4 text-center'>Scatter Chart</h2>
          <ScatterChartComponent />
        </div>
        <div className='max-w-[60%] p-4 bg-white rounded-lg shadow-lg'>
          <h2 className='text-black text-xl font-semibold mb-4 text-center'>Horizontal Bar Chart</h2>
          <HorizontalBarChartComponent />
        </div>
        <div className='max-w-[60%] p-4 bg-white rounded-lg shadow-lg'>
          <h2 className='text-black text-xl font-semibold mb-4 text-center'>Mixed Chart</h2>
          <MixedChartComponent />
        </div>
      </div>
    </div>
  )
}

export default ChartsPage
