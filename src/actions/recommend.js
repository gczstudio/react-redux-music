
import fetch from 'isomorphic-fetch'
import {bannerUrl,personalizedUrl} from '../config'
export const banner = (obj)=>{
	return {
		type: 'BANNER',
		obj
	}
}

export function getBannerData(){
    return function (dispatch){

        return fetch(bannerUrl)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                }
            })
            .then((data) => {
                dispatch(banner(data))
            })
            .catch((err)=> {
                console.error(err)
            })
    }

}

export const recommendList = (obj)=>{
    return {
        type: 'RECOMMENDLIST',
        obj
    }
}

export function getRecommendListData(){
    return function (dispatch){

        return fetch(personalizedUrl)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                }
            })
            .then((data) => {
                dispatch(recommendList(data))
            })
            .catch((err)=> {
                console.error(err)
            })
    }

}



