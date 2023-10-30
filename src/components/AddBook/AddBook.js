import Select from 'react-select';
import Styles from './Addbook.module.css'
import image from '../../assets/images/reading-bkg.jpg'
import { useState } from 'react';
const AddBook = (props) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        categories: props.categories || null,
        authors: props.authors || null,
        selectedAuthor: "",
        selectedCategories: [],
        file: null,
        image: ""
    }
    )

    let { categories, authors } = props;

    const handleChange = (event) => {
        let { name, value } = event.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let { title, description, selectedCategories, selectedAuthor, category, image } = formData;
        console.log(`image: ${JSON.stringify(image)}`);
        props.createBook({ title, description, category: formData.selectedCategories, author: formData.selectedAuthor, isDeleted: false, image: formData.image._id });
    }

    const handleChangeField = (event) => {
        console.log('file', event.target.files[0])
        this.setState({ file: event.target.files[0] })
        props.uploadImage({ file: event.target.files[0] })
    }

    const handleSelectAuthor = (event) => {
        console.log("selected Author", event.target.value);
        this.setState({ selectedAuthor: event.target.value });
    }

    const handleSelectCategory = (arr) => {
        console.log("selected Category", arr);
        let selectedCategories = arr.map(item => { return item.value })
        this.setState({ selectedCategories })
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
                    {/* <select onChange={handleSelectAuthor}> */}
                    <select>
                        {authors && authors.map(author => {
                            let fullName = author.firstName + ' ' + author.lastName;
                            return <option key={author._id} value={author._id}>{fullName}</option>
                        })}

                    </select>
                </div>

                <label> Select Categories
                    {/* <Select 
            options={categories.map(category => { return { value: category._id, label: category.name } })}
              onChange={handleSelectCategory} isMulti> */}
                    <Select >

                    </Select>
                </label>


                <div className="book_input">
                    <input
                        type="file"
                        name="image"
                        onChange={handleChangeField}
                    />
                </div>
                <div className="book_input">
                    <button type="submit">create book</button>
                </div>

            </form>

            <img className={Styles.addBookImage} src={image} alt='reading' />
        </div>
    )

}
export default AddBook;