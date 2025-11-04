import {react} from 'react'

const Title = ({text1 , text2}) =>{
    return(
        <>
            <div className='text-center px-5'>
                <p className='text-2xl text-gray-500 '> {text1} <span className='text-black font-semibold'>{text2} </span></p>
            </div>
        </>
    )
}

export default Title