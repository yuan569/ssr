import axios from "axios"
export const getData = () => {
    return (dispatch) => {
        return axios.get('https://echo.apifox.com/json').then(res => {
            const data = res.data.slideshow.slides
            dispatch({type: 'CHANGE_LIST', list: data})

        })
    }
}