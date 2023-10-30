import Styles from "./FeaturedBook.module.css"
import lordTitle from "../../assets/images/lordTitle.png"
import lordCover from "../../assets/images/lordCover.jpg"
import witchKing from "../../assets/images/Witchking.webp"
import harryCover from "../../assets/images/harryCover.webp"
import harryTitle from "../../assets/images/harryTitle.png"
import harryCharacter from "../../assets/images/harryCharacter.png"
import {FeaturedBooks} from '../../assets/data/featuredData'
const FeaturedBook =() =>{

        return (
            <div className={Styles.featured}>
         
                     
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