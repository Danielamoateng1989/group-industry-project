
import { Line } from "react-chartjs-2"

const Chart = () => {
    return (
        <div>
     <Line data=
     
     {{
        
           labels: ['40', '45', '50', '55', '60', '65', '70', '75'],
        datasets: [{
            label: 'Retirement Savings over time',
            data: [1000, 3000, 4000, 5200, 6000, 7000, 6000, 5000, 4000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]






}}>

      </Line>   

</div>
)

}

export default Chart