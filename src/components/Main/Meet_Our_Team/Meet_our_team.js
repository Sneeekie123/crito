import React from 'react'
import './Meet_our_team.css'
import kristine from '../../../assets/images/Kristine.png'
import mark from '../../../assets/images/Mark.png'
import kimberly from '../../../assets/images/Kimberly.png'
import justin from '../../../assets/images/Justin.png'
import star from '../../../assets/images/Star.png'
import cassandra from '../../../assets/images/cassandra.svg'
import amanda from '../../../assets/images/amanda.svg'
import jack from '../../../assets/images/jack.svg'

const Meet_our_team = () => {
  return (
            <section className="meet-our-team">
            <div className="background-yellow">
                <div className="container experience-team">
                    <h3>
                        Meet Our Team
                    </h3>
                    <h2>
                        Experience Team Members
                        <a href="browse.team.html"><button className="btn-yellow"> browse team<i className="fa-regular fa-arrow-up-right"></i></button></a>
                    </h2>
                </div>
                <div className="container personell-pictures">
                    <div id="kristine"><img src={kristine} alt=""/>
                        <div className="first-last-name">
                            <h4>Kristine Palmer</h4>
                            <p>Chef Operation Officer</p>
                        </div>
                    </div>
                    <div id="mark"><img src={mark} alt=""/>
                        <div className="first-last-name">
                            <h4>Mark Aubri</h4>
                            <p>Senior Consultant</p>
                        </div>
                    </div>
                    <div id="kimberly"><img src={kimberly} alt=""/>
                        <div className="first-last-name">
                            <h4>Kimberly Hansen</h4>
                            <p>Senior Consultant</p>
                        </div>
                    </div>
                    <div id="justin"><img src={justin} alt=""/>
                        <div className="first-last-name">
                            <h4>Justin Willoman</h4>
                            <p>Senior Tech Consultant</p>
                        </div>
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
                
                
                <div className="testimonial">
                    <div className="container red-headline">
                        <p>
                            Testimonial
                        </p>
                        <h2>
                            What Our Client Says
                        </h2>
                    </div>
                    <div className="container rating-from-google">
                        <div id="cassandra"> 
                            <img src={star} alt=""/>
                            <p className="rating-text">
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                            </p>
                            <div className="personal-intro  ">
                                <img src={cassandra} alt=""/>
                                <h4>
                                    Cassandra Warren
                                <p>
                                    Business Manager, Dorfus
                                </p>
                                </h4>
                        </div>
                        </div>
                        <div id="amanda"> 
                            <img src={star} alt=""/>
                            <p className="rating-text">
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                            </p>
                            
                            <div className="personal-intro">
                                <img src={amanda} alt=""/>
                                <h4>
                                    Amanda Tulling
                                <p>
                                    Senior Developer, Square
                                </p>
                                </h4>
                        </div>
                        </div>
                        <div id="jack"> 
                            <img src={star} alt=""/>
                            <p className="rating-text"> 
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                            </p>
                        <div className="personal-intro">
                                <img src={jack} alt=""/>
                                <h4>
                                    Jack McDogglas
                                <p>
                                    Key Account Manager, Gobona
                                </p>
                                </h4>
                        </div>
                        </div>    
                    </div>
                    <div className="all-reviews">
                        <a href="all.revies.html"><button className="btn-black">All Reviews<i className="fa-regular fa-arrow-up-right"></i></button></a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Meet_our_team