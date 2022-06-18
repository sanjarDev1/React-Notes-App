import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({searchText}) => {
  return (
    <div className='search'>
      <MdSearch className="search-icons" size={"1.3rem"} />
      <input onChange={(e)=>searchText(e.target.value)} type="text" placeholder='type to search ...' />

    </div>
  )
}

export default Search