import React, {useState} from 'react'

const Autocomplete = ({possibleSearchResults}) => {
    const [searchValue, setSearchValue] = useState("")
    return (
        <div>
            <input 
            value= {searchValue}
            onChange={(e)=> setSearchValue(e.target.value)
                
            }/>
            {searchValue && possibleSearchResults.filter(x =>x.includes(searchValue)).map(p => <li>{p}</li>)}
        </div>
    )
}

export default Autocomplete