import React from 'react';
import { Container } from '../components/Grid/index';
import NavBar from '../components/NavBar/index';
import Footer from '../components/Footer/index';
import Horiseon from '../components/assets/images/HoriseonIMG.PNG';
import PassGen from '../components/assets/images/PasswordGenFinal.png';
import WorkDaySch from '../components/assets/images/WorkDayScheduler.png';
import WeatherApp from '../components/assets/images/weather-db.png';
import EmplTracker from '../components/assets/images/Employee-tracker.jpg';
import NoteTaker from '../components/assets/images/Note-Taker.png';
import SdcBrew from '../components/assets/images/SDC-Beer.png';
import StuPort from '../components/assets/images/project2.png';


const Portfolio = () => {
    return (
        <Container>
            <NavBar/>
            <main className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="page-header">
                            <h1>Portfolio</h1>
                        </div>
                    </div>
                </div>
                <hr />
                {/* <!-- 1st row in container --> */}
                <div className="row">
                    <div className="col-sm-6">
                        {/* <!-- Insert card className to portray previous projects --> */}
                        <div className="card">
                            <img src={Horiseon}
                                className="img img-thumbnail card-img-top img-size"
                                alt="Image of marketing site, people working together at the office."
                            />
                                
                            <div className="card">
                                <h5 className="card-title" ><a href="https://github.com/Xicano619/Marketing-Agency">Horiseon Marketing Agency</a></h5>
                                <p className="card-text">
                                    The website of a marketing agency (Horiseon) was refactored,
                                    upgraded making it accessible and responsive.
                                </p>
                            </div>
                        </div>
                            
                    </div>

                    <div class="col-sm-6">
                        <div class="card">
                            <img src={PassGen}
                                class="img img-thumbnail card-img-top img-size"
                                alt="10 character randomized password"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><a href="https://github.com/Xicano619/Password-Generator">Password Generator</a></h5>
                                <p class="card-text">
                                    This application generates a 8-128 character randomized password. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                {/* <!-- 2nd row in container --> */}
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={WorkDaySch}
                                className="img img-thumbnail card-img-top img-size"
                                alt="Work day scheduler highlighted in grey, 9am-noon."
                            />
                            <div className="card-body">
                                <h5 className="card-title"><a href="https://github.com/Xicano619/Work-Day-Scheduler">Work-Day Schedular</a></h5>
                                <p className="card-text">
                                    This application allows the user to keep track of their schedule during the work week; also, jot down notes within the workday-hours (9-5). 
                                </p>
                            </div>
                        </div>
                    </div>
                        
                    <div className="col-md-4">
                        <div className="card">
                            <img src={WeatherApp}
                                className="img img-thumbnail card-img-top img-size"
                                alt="Application with city search input San Diego weather."
                            />
                            <div className="card-body">
                                <h5 className="card-title"><a href="https://github.com/Xicano619/Weather-Dashboard-">Weather Dashboard</a></h5>
                                <p className="card-text">
                                    In this application, the traveling user can check the weather of multiple cities and see a five-day forecast of those chosen city(s). 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img src={EmplTracker}
                                className="img img-thumbnail card-img-top img-size"
                                alt="..."
                            /> 
                            <div className="card-body">
                                <h5 className="card-title"><a href="https://github.com/Xicano619/Employee-Tracker">Employee-Tracker</a></h5>
                                <p className="card-text">
                                    The Employee-Tracker application allows the user to create, view and manage the departments, roles, and employees in their company.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                {/* <!-- 3rd row in container --> */}
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <img src={NoteTaker}
                                class="img img-thumbnail card-img-top img-size"
                                alt="Note-Taker App"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><a href="https://github.com/Xicano619/Note-Taker">Note-Taker</a></h5>
                                <p class="card-text">
                                    The Note-Taker application allows the user to take notes, save the notes, and delete them. Using the express package allows the user to connect via server and thus saving the notes data into the db.json file with a unique id, title, note. In addition, when the user deletes the note data, it deletes from the db.json file.  
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img src={SdcBrew}
                                class="img img-thumbnail card-img-top img-size"
                                alt="San Diego County Beer App"
                            />
                            <div class="card-body">
                                <h5 class="card-title"><a href="https://github.com/Xicano619/Project-B">Project Beer</a></h5>
                                <p class="card-text">
                                    The SDC Beer project is a drinking friendly search app for users 21 years-old or older, brewery goers. 
                                </p>
                            </div>
                        </div>
                    </div>
                         
                    <div class="col-md-4">
                        <div class="card">
                            <img src={StuPort}
                                class="img img-thumbnail card-img-top img-size"
                                alt="Student Portal App"
                            /> 
                            <div class="card-body">
                                <h5 class="card-title"><a href="https://github.com/larrygamboa/project2">Project 2</a></h5>
                                <p class="card-text">
                                    This application allows students to create an account by signing up with an email and a password and then log into the account to access the information about topics that they want to study that could be marked as "completed" and the percentage of completion will be displayed in the progress bar. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <br/>
            <br/>
            <Footer/>
        </Container>
    );
};

export default Portfolio;