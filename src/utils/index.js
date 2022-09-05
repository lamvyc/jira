import { useEffect,useState } from "react"

export const isFalsy = (value) => value === 0 ? false : !value

//在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object) => {
    //Object.assign({},object)
    const result = { ...object }
    Object.keys(result).forEach(
        key => {
            const value = result[key]
            if (isFalsy(value)) {
                delete result[key]
            }
        }
    )
    return result
}

//在页面刚加载的时候执行一个函数callback
export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}


// const debounce = (func, delay) => {
//     let timeout
//     return () => {
//         //清除上一次定时器
//         if(timeout){
//             clearTimeout(timeout)
//         }
//         timeout = setTimeout(
//             function(){
//                 func()
//             },delay)
//     }
// }

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        //每次在value变化以后，设置一个定时器；当然delay也会但没那么重要
        const timeout = setTimeout(() => setDebounceValue(value), delay)
        //每次在上一个useEffect处理完以后再运行
        //每次在上一个useEffect运行完才执行
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debounceValue
}