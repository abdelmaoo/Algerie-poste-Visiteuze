import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  import "./dash.css";
  import React, { useState, useEffect } from "react"; 
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
function Dash() {
    const [chartData, setChartData] = useState({
        datasets: [],
      });
     
      const [chartOptions, setChartOptions] = useState({});
     
      useEffect(() => {
        setChartData({
          labels: ['jan','fev','mars','avr','mai','juin','juil','aout','sep','oct','nov','dec'],
          datasets: [
            {
              label: "Total des rendez-vous",
              data: [140,120,300,150,200,30,68,100,154,276,138,176],
              backgroundColor: [
                "rgba(53, 162, 235, 0.4)",  
            ],
            borderColor: [
                "rgb(53, 162, 235)",
                
            ],
            borderWidth: 1
            },
          ],
        });
        setChartOptions({
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
             
            },
          },
        });
      }, []);

      const [cData, setcData] = useState({
        datasets: [],
      });
     
      const [cOptions, setcOptions] = useState({});
     
      useEffect(() => {
        setcData({
          labels: ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'],
          datasets: [
            {
              label: "Rendez-vous",
              data: [68,20,30,15,25,35,40],
              backgroundColor: [
                "rgba(53, 162, 235, 0.4)",  
            ],
            borderColor: [
                "rgb(53, 162, 235)",
                
            ],
            borderWidth: 1
            },
          ],
        });
        setcOptions({
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
             
            },
          },
        });
      }, []);
      
  return (
    <div className='dash '>
     
     <div className='sidebar'>
     <ul>
        <li>
            <a href='#'>
            
                          <div>Dashboard</div>     
            </a>
        </li>
        <li>
            <a href='#'>
            
               <div>Rendez-vous planifier</div>     
            </a>
        </li>
        <li>
            <a href='#'>
           
               <div>Rendez-vous non planifier</div>     
            </a>
        </li>
        <li>
            <a href='#'>
            
               <div>Rendez-vous annuler</div>     
            </a>
        </li>
        <li>
            <a href='#'>
            
               <div>Parametres</div>     
            </a>
        </li>
        <li>
            <a href='#'>
              
               
               
               <div>Aider</div>     
            </a>
        </li>
       </ul>  
    </div>

    <div  className='main'>
     <div className='cards font-poste'>
       <div className='card'>
            <div className='card-content'>
                <div className='number'>125</div>
                
                <div className='card-name'>Rendez-vous planifier</div>
            </div>
            <div className='icon-box'>
               <i classe="fas fa-user-graduate"></i>
            </div>
       </div>

       <div className='card'>
            <div className='card-content'>
                <div className='number'>1245</div>
                <div className='card-name'>Rendez-vous non planifier</div>
            </div>
            <div className='icon-box'>
               <i classe="fas fa-user-graduate"></i>
            </div>
       </div>

       <div className='card'>
            <div className='card-content'>
                <div className='number'>45</div>
                <div className='card-name'>Rendez-vous annuler</div>
            </div>
            <div className='icon-box'>
               <i classe="fas fa-user-graduate"></i>
            </div>
       </div>
      </div>
      <div className='charts font-poste'>
        <div className='chart'>
            <h2>Total des rendez-vous(durant 12 mois)</h2>
             <div className='barChart'>
             <Bar options={chartOptions} data={chartData} />
            </div>
        </div>
        <div className='chart' id='doughant-chart'>
          <h2>Rendez-vous planifier (durant 1 semaine)</h2>
           <div>
             <Bar options={cOptions} data={cData} />  
           </div>
        </div>
         </div>
    </div>
     </div>
    
    
  )
}
export default Dash;