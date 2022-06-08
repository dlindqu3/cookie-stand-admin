import Head from "next/head";
import { useState } from 'react'

export default function Home() {

  const [formData, setFormDataState] = useState({responseData:[]});

  function getQuestionFormHandler(event) {
    event.preventDefault(); 

    let currentJSON = {
      location : event.target.location.value,
      minimumCustomers : event.target.minimumCustomers.value,
      maximumCustomers : event.target.maximumCustomers.value,
      averageCookies : event.target.averageCookies.value  
   }
   
    setFormDataState(currentJSON)
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
        <ReportTable/>
        

        <DisplayResponseJSON responseData={formData}/>
      </main>
      <Footer copyright="2025"/>
    </div>
  );
}

function Header() {
  return (
    <header className="px-6 py-6 text-4xl bg-green-600 text-gray-800">
      <h1>Cookie Stand Admin</h1>
    </header>
  );
}

function Footer({ copyright }){
  return (
    <footer className="px-8 py-6 bg-green-600 text-gray-800">
    <p>&copy;{copyright}</p>
</footer>
  )
}

function ReportTable(){
  return (
    <p>Report Table Coming Soon...</p>
  )
}

function DisplayResponseJSON(props){
  return (
    JSON.stringify(props.responseData) == '{"responseData":[]}' ?  <p></p> : <p>{JSON.stringify(props.responseData)}</p> 
  )
}

function QuestionForm(props) {
  return (
   
    <form onSubmit={props.onSubmit} className="max-w-screen-lg w-full bg-green-600">
      <div className="px-8 py-8">
        <label for="location">Location</label>
        <input
          id="location"
          className="flex-auto pl-2"
          placeholder=""
          required
        />
      </div>

      <div className="flex flex-wrap w-full md-3 px-8 py-8">
    
        <div className="md:w-1/4 w-full">
          <label for="minimumCustomers">Minimum customers per hour</label>
          <input
            id="minimumCustomers"
            className=""
            placeholder=""
            required
          />
        </div>

        <div className="md:w-1/4 w-full">
          <label for="maximumCustomers">Maximum customers per hour</label>
          <input
            id="maximumCustomers"
            className=""
            placeholder=""
            required
          />
        </div>

        <div className="md:w-1/4 w-full">
          <label for="Average cookies per sale">Average Cookies per Sale</label>
          <input
            id="averageCookies"
            className=""
            placeholder=""
            required
          />
        </div>

        <div className="md:w-1/4 w-full">
        <button className="px-4 py-2 bg-green-400 text-gray-50">Create</button>
        </div>
          
        </div>
    
    </form>
  );
}
