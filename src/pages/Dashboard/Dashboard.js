import Styles from './Dashboard.module.css'
// import axios from 'axios';
import { useState, useEffect,useRef } from 'react';
import useApi from '../../hooks/useApi';


const Dashboard = () => {

  const [books, setBooks] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const isDataFetched = useRef(false); // useRef to track the fetch status
  const { apiCall } = useApi();

  useEffect(() => {

    const fetchBooks = async () => {
      // --- THE NODE BOOK APP BACKEND ROUTE ---
      // try {
      //     setIsLoading(true)
      //     const response = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/books/`);
      //     console.log(response.data.data)
      //     setBooks(response.data.data);
      // } catch (error) {
      //     console.log(error);
      // } finally {
      //     setIsLoading(false)

      // }

      // --- THE NODE BOOK APP BACKEND ROUTE ---
      if (!isDataFetched.current) {
        setIsLoading(true)
      try {
    
        const bookData = await apiCall({
          url: '/books/all',
          method: 'get'
        })
        console.log(bookData)
        setBooks(bookData);
      
      } catch (error) {
        console.log(error);

      } finally {
        setIsLoading(false)
        isDataFetched.current = true; 
      }
      }
    };

    fetchBooks();
  }, [apiCall]);

  return (
    <main className={Styles.dashboardContainer} >
      <h1>Books</h1>
      {/* <section className={Styles.booksContainer} >

        {!isLoading && books ?
          books.map((book, index) => {
            return <div>
              <img src={`${process.env.REACT_APP_BACKEND_ENDPOINT}/${book.image.destination}`} alt={book.title} />
              <h4 key={index}>{book.title}</h4>
            </div>

          })
          : <p>Loading.....</p>}
      </section> */}
    </main>
  )
}


export default Dashboard