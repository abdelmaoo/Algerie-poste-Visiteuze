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
  import Axios from 'axios';

  
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


  const [rdvp,setNbrRdvp]=useState();
  const [rdvnp,setNbrRdvnp]=useState();
  const [rdvan,setNbrRdvan]=useState();
  const [date1,setDate]=useState();
  const [date2,setDate2]=useState();
  const [date3,setDate3]=useState();
  const [date4,setDate4]=useState();
  const [date5,setDate5]=useState();
  const [month1,setmonth1]=useState();
  const [month2,setmonth2]=useState();
  const [month3,setmonth3]=useState();
  const [month4,setmonth4]=useState();
  const [month5,setmonth5]=useState();
  const [month6,setmonth6]=useState();
  const [month7,setmonth7]=useState();
  const [month8,setmonth8]=useState();
  const [month9,setmonth9]=useState();
  const [month10,setmonth10]=useState();
  const [month11,setmonth11]=useState();
  const [month12,setmonth12]=useState();
  const apiget_rdvp = "http://localhost:3001/get_nbrrdvp"
  useEffect(() => {  
    console.log("youu aree in axios")
   const getRdvp = async () => {
   const { data: res } = await Axios.get(apiget_rdvp);
    setNbrRdvp(res[0].value);
    console.log("resullltt",res);
};
getRdvp();
  }, []);
  console.log(rdvnp)
  /////////////////////////////////////////
  const apiget_rdvnp = "http://localhost:3001/get_nbrrdvnp"
  useEffect(() => {  
   const getRdvnp = async () => {
   const { data: res } = await Axios.get(apiget_rdvnp);
    setNbrRdvnp(res[0].value);
};
getRdvnp();
  }, []);
  console.log("rdvvvp",rdvp)
  /////////////////////////////////////////
  const apiget_rdvan = "http://localhost:3001/get_nbrrdvan"
  useEffect(() => {  
   const getRdvan = async () => {
   const { data: res } = await Axios.get(apiget_rdvan);
    setNbrRdvan(res[0].value);
};
getRdvan();
  }, []);
  /////////// date 1
  console.log("date1",date1)
  const apiget_date = "http://localhost:3001/get_date"
  useEffect(() => {  
   const getDate= async () => {
   const { data: res } = await Axios.get(apiget_date);
    setDate(res[0].value);
};
getDate();
  }, []);
 
  /// date 2
  console.log("date2",date2)
  const apiget_date2 = "http://localhost:3001/get_date2"
  useEffect(() => {  
   const getDate2= async () => {
   const { data: res } = await Axios.get(apiget_date2);
    setDate2(res[0].value);
};
getDate2();
  }, []);

   /// date 3
   console.log("date3",date3)
   const apiget_date3 = "http://localhost:3001/get_date3"
   useEffect(() => {  
    const getDate3= async () => {
    const { data: res } = await Axios.get(apiget_date3);
     setDate3(res[0].value);
 };
 getDate3();
   }, []);

    /// date 4
  console.log("date4",date4)
  const apiget_date4 = "http://localhost:3001/get_date4"
  useEffect(() => {  
   const getDate4= async () => {
   const { data: res } = await Axios.get(apiget_date4);
    setDate4(res[0].value);
};
getDate4();
  }, []);

   /// date 5
   console.log("date5",date5)
   const apiget_date5 = "http://localhost:3001/get_date5"
   useEffect(() => {  
    const getDate5= async () => {
    const { data: res } = await Axios.get(apiget_date5);
     setDate5(res[0].value);
 };
 getDate5();
   }, []);

    /// month 1
    console.log("month1",month1)
    const apiget_month1 = "http://localhost:3001/get_month1"
    useEffect(() => {  
     const getmonth1= async () => {
     const { data: res } = await Axios.get(apiget_month1);
      setmonth1(res[0].value);
  };
  getmonth1();
    }, []);
  
    /// month 2
    console.log("month2",month2)
    const apiget_month2 = "http://localhost:3001/get_month2"
    useEffect(() => {  
     const getmonth2= async () => {
     const { data: res } = await Axios.get(apiget_month2);
      setmonth2(res[0].value);
  };
  getmonth2();
    }, []);
        /// month 3
        console.log("month3",month3)
        const apiget_month3 = "http://localhost:3001/get_month3"
        useEffect(() => {  
         const getmonth3= async () => {
         const { data: res } = await Axios.get(apiget_month3);
          setmonth3(res[0].value);
      };
      getmonth3();
        }, []);
            /// month 4
    console.log("month4",month4)
    const apiget_month4 = "http://localhost:3001/get_month4"
    useEffect(() => {  
     const getmonth4= async () => {
     const { data: res } = await Axios.get(apiget_month4);
      setmonth4(res[0].value);
  };
  getmonth4();
    }, []);
        /// month 5
        console.log("month5",month5)
        const apiget_month5 = "http://localhost:3001/get_month5"
        useEffect(() => {  
         const getmonth5= async () => {
         const { data: res } = await Axios.get(apiget_month5);
          setmonth5(res[0].value);
      };
      getmonth5();
        }, []);
            /// month 6
    console.log("month6",month6)
    const apiget_month6 = "http://localhost:3001/get_month6"
    useEffect(() => {  
     const getmonth6= async () => {
     const { data: res } = await Axios.get(apiget_month6);
      setmonth6(res[0].value);
  };
  getmonth6();
    }, []);
        /// month 7
        console.log("month7",month7)
        const apiget_month7 = "http://localhost:3001/get_month7"
        useEffect(() => {  
         const getmonth7= async () => {
         const { data: res } = await Axios.get(apiget_month7);
          setmonth7(res[0].value);
      };
      getmonth7();
        }, []);
            /// month 8
    console.log("month8",month8)
    const apiget_month8 = "http://localhost:3001/get_month8"
    useEffect(() => {  
     const getmonth8= async () => {
     const { data: res } = await Axios.get(apiget_month8);
      setmonth8(res[0].value);
  };
  getmonth8();
    }, []);
      /// month 9
      console.log("month9",month9)
      const apiget_month9 = "http://localhost:3001/get_month9"
      useEffect(() => {  
       const getmonth9= async () => {
       const { data: res } = await Axios.get(apiget_month9);
        setmonth9(res[0].value);
    };
    getmonth9();
      }, []);
          /// month 10
    console.log("month10",month10)
    const apiget_month10 = "http://localhost:3001/get_month10"
    useEffect(() => {  
     const getmonth10= async () => {
     const { data: res } = await Axios.get(apiget_month10);
      setmonth10(res[0].value);
  };
  getmonth10();
    }, []);
        /// month 11
        console.log("month11",month11)
        const apiget_month11 = "http://localhost:3001/get_month11"
        useEffect(() => {  
         const getmonth11= async () => {
         const { data: res } = await Axios.get(apiget_month11);
          setmonth11(res[0].value);
      };
      getmonth11();
        }, []);
    /// month 12
    console.log("month12",month12)
    const apiget_month12 = "http://localhost:3001/get_month12"
    useEffect(() => {  
     const getmonth12= async () => {
     const { data: res } = await Axios.get(apiget_month12);
      setmonth12(res[0].value);
  };
  getmonth12();
    }, []);

    // const [chartData, setChartData] = useState({
    //     datasets: [],
    //   });
     

      let today = new Date()

      // const [chartOptions, setChartOptions] = useState({});

      let months = [{0 :'Janvier',1:'Fevrier',2:'Mars',3:'Avril',4:'Mai',5 :'Juin',6:'Juillet',7:'Aout',8:'Septembre',9:'Octobre',10:'Novembre',11:'Decembre'}];
      let month = today.getMonth();
      console.log(month)

       let chartData = {
          labels: [months[0][(month + 1) % 12],months[0][(month + 2) % 12],months[0][(month + 3) % 12],months[0][(month + 4) % 12],months[0][(month + 5) % 12],months[0][(month + 6) % 12],months[0][(month + 7) % 12],months[0][(month + 8) % 12],months[0][(month + 9) % 12],months[0][(month + 10) % 12],months[0][(month + 11) % 12],months[0][month]],
          datasets: [
            {
              label: "Total des rendez-vous",
              data: [month12,month11,month10,month9,month8,month7,month6,month5,month4,month3,month2,month1],
              backgroundColor: [
                "rgba(53, 162, 235, 0.4)",  
            ],
            borderColor: [
                "rgb(53, 162, 235)",
                
            ],
            borderWidth: 1
            },
          ],
        }
         let chartOptions = ({
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
             
            },
          }
        });


      // const [cData, setcData] = useState({
      //   datasets: [],
      // });
     
      // const [cOptions, setcOptions] = useState({});



      let week = [{2 :'mardi',3:'mercredi',4:'jeudi',0:'dimanche',1:'lundi'}];
      let day = today.getDay();
console.log("todaaay",day)

// getUTCDate()
// getUTCFullYear()
// getUTCMonth()
//.toLocaleDateString()
     

        let cData = {
          labels: [week[0][(day + 1) % 5],week[0][(day + 2) % 5],week[0][(day + 3) % 5],week[0][(day + 4) % 5],week[0][day]],
          datasets: [
            {
              label: "Rendez-vous",
              data: [date5,date4,date3,date2,date1],
              backgroundColor: [
                "rgba(53, 162, 235, 0.4)",  
            ],
            borderColor: [
                "rgb(53, 162, 235)",
                
            ],
            borderWidth: 1
            },
          ],
        }
        let cOptions = ({
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

      
  return (
    <div className='dash'>
     
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
     <div className='cards'>
       <div className='card'>
            <div className='card-content'>
                <div className='number'>{rdvp}</div>
                
                <div className='card-name'>Rendez-vous planifier</div>
            </div>
            <div className='icon-box'>
               <i classe="fas fa-user-graduate"></i>
            </div>
       </div>

       <div className='card'>
            <div className='card-content'>
                <div className='number'>{rdvnp}</div>
                <div className='card-name'>Rendez-vous non planifier</div>
            </div>
            <div className='icon-box'>
               <i classe="fas fa-user-graduate"></i>
            </div>
       </div>

       <div className='card'>
            <div className='card-content'>
                <div className='number'>{rdvan}</div>
                <div className='card-name'>Rendez-vous annuler</div>
            </div>
            <div className='icon-box'>
               <i classe="fas fa-user-graduate"></i>
            </div>
       </div>
      </div>
      <div className='charts'>
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