import axios from "axios";

export const  SAVE_INFO= "SAVE_INFO"
export function sendMessage(params){
  return dispatch =>{
  	dispatch({
      payload:{params},
    	type: SAVE_INFO,
  	})
    window.location.href = 'https://api.whatsapp.com/send?phone='+params.countryCode+params.phoneNumber+'&text='+encodeURIComponent(params.text)+'&source=web&data=&app_absent"';
  }
}
export function saveInfo(params){
  return dispatch =>{
  	dispatch({
      payload:{params},
    	type: SAVE_INFO,
  	})
  }
}

