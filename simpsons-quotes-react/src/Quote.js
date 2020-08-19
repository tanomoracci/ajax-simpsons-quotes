import React from 'react'

function Quote ({ quote }){

    return (
            <div>
                <div className='container'>
                <h2 className='text-center' >{quote.character}</h2>
                <h4 className='text-center'>{quote.quote}</h4>
                <img src={quote.image}></img>
                </div>
            </div>
        )
    
}
export default Quote;
