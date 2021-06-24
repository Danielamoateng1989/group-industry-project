
import { Bar } from "react-chartjs-2"

const Chart = () => {
    return (
     <Bar data={{
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
          label: 'Calculations',
          data: [400, 500, 700, 700, 500, 600, 444],
          backgroundColor: '#3badee'
        }]
      }}>

      </Bar>    
)

}

export default Chart