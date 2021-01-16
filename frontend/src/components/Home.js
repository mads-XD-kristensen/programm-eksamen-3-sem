import facade from "../facades/fetchFacade";
import React, { useState, useEffect } from "react";

export default function Home() {
  const init = {id: "", name: "", price: "", address: "", phone: "", email: "", url: ""}
  const [singleHotelInfo, setSingleHotelInfo] = useState(init)
  const [dataFromServer, setDataFromServer] = useState([]);
  useEffect(() => {
    facade().hotelFetcher().fetchData().then((data) => {
      console.log(data)
      setDataFromServer([...data])
    });
  }, []);

/* function additionalInfo(evt) {
  setSingleHotelInfo({
    ...singleHotelInfo,
    
    
  });
} */


  return (
    <div className="text-center w-100">
      {/* <h1>specific hotel</h1>
      {singleHotelInfo.id} */}
      <h1>List of hotels</h1>
      <table>
        <thead><tr>
          <td>id</td>
          <td>name</td>
          <td>content</td>
          <td>price</td>
          <td>address</td>
          <td>phone</td>
          <td>email</td>
          <td>url</td>
        </tr></thead>
        <tbody>
          {dataFromServer.map((hotel) => {
            return (
              <tr key={hotel.id}>
                <td>{hotel.id}</td>
                <td>{hotel.name}</td>
                <td>{hotel.content}</td>
                <td>{hotel.price}</td>
                <td>{hotel.address}</td>
                <td>{hotel.phone}</td>
                <td>{hotel.email}</td>
                <td>{hotel.url}</td>
                <td><button>book</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>


    </div>
  );
}

{/* 

           */}