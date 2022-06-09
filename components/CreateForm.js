 export default function QuestionForm(props) {
  return (
   
    //lab 38: just use form to get name of city 

    <form onSubmit={props.onSubmit} className="max-w-screen-lg w-full bg-green-600 rounded">
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
    
        <div className="md:w-1/5 w-full bg-green-400 rounded m-4 py-2 px-2 pr-1">
          <label for="minimumCustomers">Minimum customers per hour</label>
          <input
            id="minimumCustomers"
            className=""
            placeholder=""
            required
          />
        </div>

        <div className="md:w-1/5 w-full bg-green-400 rounded m-4 py-2 px-2 pr-1">
          <label for="maximumCustomers">Maximum customers per hour</label>
          <input
            id="maximumCustomers"
            className=""
            placeholder=""
            required
          />
        </div>

        <div className="md:w-1/5 w-full bg-green-400 rounded m-4 py-2 px-2 pr-1">
          <label for="Average cookies per sale">Average Cookies per Sale</label>
          <input
            id="averageCookies"
            className=""
            placeholder=""
            required
          />
        </div>

        <div className="md:w-1/4 w-full">
        <button className="px-3 py-2 px-2 bg-green-700 text-gray-50 rounded">Create</button>
        </div>
          
        </div>
    
    </form>
  );
}