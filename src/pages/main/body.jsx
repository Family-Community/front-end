import React, { useState } from 'react';

function Body() {

    // 검색 기능 컴포넌트
    const Search = () => {
        
        const [searchTerm, setSearchTerm] = useState('');
        const [searchResults, setSearchResults] = useState([]);

        //검색 결과 얻는 함수
        const getSearchResults = async (searchTerm) => {
            //api 호출 & db에서 검색 결과 가져옴
            //setSearchResults 함수를 통해 state에 [...검색 결과 배열] 저장됨
        };

        //검색어 변경 함수
        const handleSearchChange = (event) => {
            const { value } = event.target;
            setSearchTerm(value);
            getSearchResults(value);
        };

        return(
            <div>
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="검색" 
                />
                <ul>
                    {searchResults.map((result) => (
                        <li key={result.id}>{result.name}</li>
                    ))}
                </ul>
            </div>
        );
    };

    
    return (
        <Search>
                <p>main page</p>
        </Search>

    )
}

export default Body;