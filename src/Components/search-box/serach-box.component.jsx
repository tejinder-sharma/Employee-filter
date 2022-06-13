// import { useState } from "react";
import './search-box.styles.css'

const SearchBox = ({onChangeHandler, placeholder} ) => {
            return(
            <input className='search-box' type="search" placeholder={placeholder} onChange={onChangeHandler}/>
        )

}

export default SearchBox