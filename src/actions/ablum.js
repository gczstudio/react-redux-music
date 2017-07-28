import fetch from 'isomorphic-fetch'
import {albumUrl} from '../config'

export const ablum = (obj)=>{
	return {
		type: 'ABLUM',
		obj
	}
}


export default function getAblumData(id){

    return function (dispatch){
        return fetch(`${albumUrl}?id=${id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                }
            })
            .then((data) => {
                dispatch(ablum(data))
            })
            .catch((err)=> {
                console.error(err)
            })
    }

}