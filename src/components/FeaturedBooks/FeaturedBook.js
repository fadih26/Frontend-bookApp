import Styles from "./FeaturedBook.module.css"
import {FeaturedBooks} from '../../assets/data/featuredData'


const FeaturedBook =() =>{

        return (
            <div className={Styles.featured}>
         
         <h2>Editors Choice</h2>

                     {FeaturedBooks.map((book,index) =>{

                        return (
                            <a key={index} className={Styles.cardContainer} href="/" alt="Mythrill" target="_blank">
                            <div className={Styles.card}>
                                <div className={Styles.wrapper}>
                                    <img src={book.coverImage} className={Styles.coverimage} alt="Character" />
                                </div>
                                <img src={book.titleImage} className={Styles.title} alt="Character" />
                                <img src={book.characImage} className={Styles.character} alt="Character" />
                            </div>
                        </a>
                        )

                     })}
             
            </div>
        )
        }

        export default FeaturedBook;