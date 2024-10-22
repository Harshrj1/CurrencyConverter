import {useEffect,useState} from "react"
function useCurrencyinfo(Currency){
    
    const [data,setData]=useState();
    useEffect(() => {
        
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)

        .then((Response) => Response.json())
        .then((Response) =>setData(Response[Currency]))
 } ,[Currency])
 return data;

}
export default useCurrencyinfo;