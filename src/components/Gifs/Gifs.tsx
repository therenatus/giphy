import React from 'react'
import { Link, useLocation, useMatch, useNavigate, useParams } from 'react-router-dom';

const Gifs = ({datas = [], isLoading, loadMore}: any) => {
    if(isLoading) return <>Loading</>
    return (
        <>
            {
                datas.map((el: any, id: number) => {
                    return (
                        <Link to={el.id} key={`${el.id}_${id}`}>
                            <img width={200} src={el.images.original.url} alt="image" key={id} />
                        </Link>
                    )
                    
                })
            }
          
        </>
    )
}

export default Gifs