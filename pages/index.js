import Head from "next/head";
import { useState } from 'react';
import Header from '../components/Header'
import QuestionForm from "../components/CreateForm";
import ReportTable from "../components/ReportTable";
import { hourly_sales_data } from "../data"; 
import Footer from "../components/Footer";

export default function Home() {

  //formData is the name of state, setFormData lets us change it, useState lets us assign an initial value to formData
  const [formData, setFormDataState] = useState([]);

  function getQuestionFormHandler(event) {
    event.preventDefault(); 

    let currentJSON = {
      location : event.target.location.value,
      hourly_sales_data : hourly_sales_data,
      minimumCustomers : event.target.minimumCustomers.value,
      maximumCustomers : event.target.maximumCustomers.value,
      averageCookies : event.target.averageCookies.value  
   }
   
    setFormDataState([...formData, currentJSON])
    event.target.reset();
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center py-4 pt-8">
        <QuestionForm onSubmit={getQuestionFormHandler} />
        <ReportTable responseData={formData} hourly_sales_data={hourly_sales_data}/>
        

        {/* <DisplayResponseJSON responseData={formData}/> */}
      </main>
      <Footer copyright="2025" formDataLength={formData.length}/>
    </div>
  );
}



// function Footer({ copyright }){
//   return (
//     <footer className="px-8 py-6 bg-green-600 text-gray-800">
//     <p>&copy;{copyright}</p>
// </footer>
//   )
// }



function DisplayResponseJSON(props){
  return (
    JSON.stringify(props.responseData) == '{"responseData":[]}' ?  <p></p> : <p>{JSON.stringify(props.responseData)}</p> 
  )
}

