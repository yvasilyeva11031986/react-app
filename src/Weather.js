import React from "react";
import { Audio } from 'react-loader-spinner';

import axios, {isCancel, AxiosError} from 'axios';

export default function Weather(props) {
    function handleResponse(response) {
        alert(`Weather in ${props.city} is ${response.data.daily[0].temperature["day"]}`);
    }
        let apiKey = "f17boc23c2b2f34d1ab3d2t904991752";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    return <h2>        
        <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  />
  </h2>
}