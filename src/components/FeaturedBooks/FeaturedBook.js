import Styles from "./FeaturedBook.module.css"
import {FeaturedBooks} from '../../assets/data/featuredData'


const FeaturedBook =() =>{

        return (
            <div className={Styles.featured}>
         
         <h2>Editors Choice</h2>

                     {FeaturedBooks.map(book =>{

                        return (
                            <a className={Styles.cardContainer} href="/" alt="Mythrill" target="_blank">
                            <div className={Styles.card}>
                                <div className={Styles.wrapper}>
                                    <img src={book.coverImage} className={Styles.coverimage} />
                                </div>
                                <img src={book.titleImage} className={Styles.title} />
                                <img src={book.characImage} className={Styles.character} />
                            </div>
                        </a>
                        )

                     })}
             
            </div>
        )
        }

        export default FeaturedBook;