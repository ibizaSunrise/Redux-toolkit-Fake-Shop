import { useEffect } from 'react';


export default function useLS(name, data) {
    useEffect(() => {
        JSON.parse(localStorage.getItem(name))

    }, [])

    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(data))
    }, [data])
    
    return data;
}