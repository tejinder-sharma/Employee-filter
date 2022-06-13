import { useState, useEffect } from 'react';
import CardList from './Components/card-list/cardList.component';
import SearchBox from './Components/search-box/serach-box.component';
import './App.css'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [employees, setEmployees] = useState([])
  const [filteredEmployees, setFilteredEmployees] = useState(employees)
  const [title, setTitle] = useState('')
  console.log('rendered')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setEmployees(users))
    }, [])

    useEffect(() => {
      const newFilteredEmployees = employees.filter((user) => {
        return(
          user.name.toLocaleLowerCase().includes(searchField)
        )
        
      })
      setFilteredEmployees(newFilteredEmployees)
     

    }, [employees, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
     }

     const onTitleChange = (event) => {
      const searchFieldString = event.target.value;
      setTitle(searchFieldString)
       }
  return(
    <div className="App">
       <h1>{title}</h1>
       <SearchBox placeholder="Search Employee" onChangeHandler={onSearchChange} />
       <br />
       <SearchBox placeholder="Set Title" onChangeHandler={onTitleChange} />
       <CardList employees={filteredEmployees} />
         
    </div>
  )
}

export default App