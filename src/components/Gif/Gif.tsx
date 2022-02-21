import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetByIdQuery } from '../../services/searchApi'
import { Datum, IFetchData } from '../../types/IFetchData'


const Gif = () => {
    const { id } = useParams()
    const {data, isLoading} = useGetByIdQuery({id: id})
    const [state, setState] = useState<Datum>()
    useEffect(() => {
        if(data){
            setState(data.data)
        }
    })
    if(isLoading) return <p>ssss</p>
    return(
        <img width={200} src={state?.images.original.url} alt="image" />
    )
};

export default Gif;