import React from 'react'
import '../../../index.css'
import girlbytable from '../../../assets/images/girlbytable.svg'
import chatgpt from '../../../assets/images/chatgpt.svg'
import book_phone from '../../../assets/images/book-phone.svg'

const Article_and_news = () => {
  return (
    <section className="article-and-news">
        <div className="container headline">
            <h3>
                Article & News
            </h3>
            <h2>
                Get Every Single Articles & News                    
                <a href="browse.services.html"><button className="browse-services">Browse Services<i className="fa-regular fa-arrow-up-right"></i></button></a>
            </h2>
        </div>
        <div className="container articles">
            <div className="artice1">
                <img src={girlbytable} alt=""/>
                <p>Business</p>
                <h4>How To Use Digitalization <br/>  In The Classroom</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
            <div className="artice2">
                <img src={chatgpt} alt=""/>
                <p>Business</p>
                <h4>How To Implement Chat GPT <br/>  In Your Projects</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
            <div className="artice3">
                <img src={book_phone} alt=""/>
                <p>Business</p>
                <h4>The Guide To Support <br/>  Modern CSS Design</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>

        </div>
        <div className="container dots">
            <div className="d-flex">
                <div className="me-3 dark-dots">
                    <input type="radio" id="dark-dots-id" name="dark-dots"/><label for="student"></label> 
                </div>
                <div className="me-3 dark-dots">
                    <input type="radio" id="dark-dots-id" name="dark-dots"/><label for="student"></label> 
                    
                </div>
                <div className="me-3 dark-dots">
                    <input type="radio" id="dark-dots-id" name="dark-dots"/><label for="student"></label> 
                </div>
                <div className="dark-dots">
                    <input type="radio" id="dark-dots-id" name="dark-dots"/><label for="student"></label> 
                </div>
            </div>
        </div>


    </section>
  )
}

export default Article_and_news