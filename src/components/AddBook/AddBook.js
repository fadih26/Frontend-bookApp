import Select from 'react-select';
import Styles from './Addbook.module.css'
import axios from 'axios';
import image from '../../assets/images/reading-bkg.jpg'
import { useState, useEffect } from 'react';
const AddBook = () => {
    const [categories, setCategories] = useState(null)
    const [authors, setAuthors] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        author: "",
        categories: [],
        image: null
    }
    )

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/categories/`);
                console.log(response.data.data)
                setCategories(response.data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)

            }
        };
        const fetchAuthors = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/authors/`);
                console.log(response.data.data)
                setAuthors(response.data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)

            }
        };

        fetchCategories();
        fetchAuthors();
    }, []);

    const handleChange = (event) => {
        let { name, value } = event.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bookData = new FormData();
        Object.keys(formData).forEach(key => {
            if (key !== 'image') {
                bookData.append(key, formData[key]);
            }
        });
        if (formData.image) {
            bookData.append('image', formData.image);
        }
        for (let [key, value] of bookData.entries()) {
            console.log(key, value);
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/books`, bookData, {
                // headers: {
                //     'Content-Type': 'multipart/form-data'
                // }
            });
            setIsSubmitted(true)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleChangeField = (event) => {
        console.log('file', event.target.files[0])
        setFormData(prevState => ({
            ...prevState,
            image: event.target.files[0]
        }));
    }



    const handleSelectCategory = (arr) => {
        console.log("selected Category", arr);
        let categoriesValues = arr.map(item => { return item.value })

        setFormData(prevState => ({
            ...prevState,
            categories: JSON.stringify(categoriesValues)
        }));
    }




    return (
        <div className={Styles.book_add}>

            <form className={Styles.book_form} onSubmit={handleSubmit}>
                <h2>Add a Book</h2>
                <div className="book_input">
                    <input
                        className={Styles.text_input}
                        required
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={handleChange}
                    />
                </div>
                <div className="book_input">
                    <input
                        className={Styles.text_input}
                        required
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                    />
                </div>
                <div className="book_input">
                    <label>
                        Select an Author
                    </label>
                    <select name="author" onChange={handleChange}>

                        {authors && authors.map(author => {
                            let fullName = author.firstName + ' ' + author.lastName;
                            return <option key={author._id} value={author._id}>{fullName}</option>
                        })}

                    </select>
                </div>

                <label> Select Categories
                    {!isLoading && categories ?

                        (<Select
                            options={categories.map(category => { return { value: category._id, label: category.name } })}
                            onChange={handleSelectCategory} isMulti>


                        </Select>) : <p>loading ....</p>
                    }
                </label>

                <div className="book_input">
                    <input
                        type="file"
                        name="image"
                        onChange={handleChangeField}
                    />
                </div>

                {!isSubmitted ? (
                    <div className="book_input">
                        <button type="submit">create book</button>
                    </div>
                ) : <button disabled>Book Added</button>}
            </form>

            <img className={Styles.addBookImage} src={image} alt='reading' />
        </div>
    )

}
export default AddBook;