import { Paragliding, SearchRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
const SearchBar = () => {
    const searchParams =  useSearchParams()
    const [searchQuery, setSearchQuery] = useState("")
    useEffect(()=>{
        setSearchQuery(searchParams.get("q")?searchParams.get("q"):"")
    }, [])
    const search = () =>{
        if(searchQuery!==""){
            location.replace(`/search?q=${searchQuery}`)
        }
    }
    return (
        <div className="search-bar">
            <input onChange={(e)=>setSearchQuery(e.target.value)}  defaultValue={searchQuery} placeholder='Search Item, Seller, Category' type="text" />
            <div className="search-btn">
                <button onClick={search}>
                    <SearchRounded />
                </button>
            </div>
        </div>
    )
}

export default SearchBar