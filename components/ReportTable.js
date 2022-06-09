import { hours, hourly_sales_data } from "../data"; 


export default function ReportTable( { responseData } ){
  
  function getLocationTotal(locationObj){
    let total = 0
    locationObj.hourly_sales_data.forEach(num => {
      total += num
    })
    return total 
  }

  // function getColumnTotals( responseData ){
  //   let hourlyTotals = []
  //   for (let i =0 ; i < hours.length; i++){
  //     let current_hour_total = 0 
  //     responseData.map(item => {
  //       current_hour_total += item.hourly_sales_data[i]
  //   })
  //     hourlyTotals[i] = current_hour_total
  //     }
  //     return hourlyTotals
  //   }
  
  
  if (responseData.length === 0){
    return (
      <h2>No Cookie Stands Available</h2>
    )
  }
  else {
    return (

      <div>
      <p>{JSON.stringify(responseData)}</p>

      <table>
        <thead>
          <tr>
            <th>Location</th>
            {
              hours.map(item => (
                <th>{item}</th>
              ))
            }
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
     
            {
              (responseData).map( item =>(
                <tr key={item.location}>
                  <td>{item.location}</td>
                  {item.hourly_sales_data.map(sale =>(
                      <td>{sale}</td>
                  ))}
                    <td>{getLocationTotal(item)}</td>
                </tr>
              )
              )
            }
            
            {/* <tr>
              {
                getColumnTotals()
              }
            </tr> */}

        </tbody>
      </table>
      

      </div>

    )

  }
}