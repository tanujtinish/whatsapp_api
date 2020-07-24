import{SAVE_INFO} from "../actions/WhatsappFormActions"

const initialState={
	countryCode:'+91',
  	phoneNumber:'',
  	text:'',
  	Error:"PLEASE ENTER MOBILE NO.",
}


export default function setInfo(state=initialState,action){
	switch (action.type){
			
		case SAVE_INFO:
		{
			console.log(action.payload.countryCode)
			return {...state, countryCode: action.payload.params.countryCode, phoneNumber: action.payload.params.phoneNumber, text: action.payload.params.text, Error: action.payload.params.Error}
		}
		default: 
			return {...state}
	}
}

