import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
const Search=()=>{
    const [search, setSearch]=useState(null);
    const handleSearchChange=(searchData)=>{
        setSearch(searchData);
    }
    return (
        <AsyncPaginate 
            placeholder="Search for city"
            value={search}
            debounceTimeout={600}
            onChange={handleSearchChange}
        />
    );
}
export default Search;