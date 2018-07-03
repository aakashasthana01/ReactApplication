import React, { Component } from 'react';
import './portal.css';
import '../../assets/styles.css';
import logo from '../../logo.svg';

class Portal extends Component {
    render() {
        return (
            <div class="Portal">
                <div class="w3-light-grey">
                    <div class="w3-panel w3-content w3-margin-top">

                        <div class="w3-row-padding">

                            <div class="w3-third">

                                <div class="w3-white w3-text-grey w3-card-4">
                                    <div class="w3-display-container">
                                        <img src="logo" alt="Avatar"  width="1500" height="600"/>
                                        <logo/>
                                        <div class="w3-display-bottomleft w3-container w3-text-black">
                                            <h2>Jane Doe</h2>
                                        </div>
                                    </div>
                                    <div class="w3-container">
                                        <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>
                                        <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p>
                                        <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>
                                        <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>
                                        <hr />

                                        <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                                        <p>Adobe Photoshop</p>
                                        <div class="w3-light-grey w3-round-xlarge w3-small">
                                            <div class="w3-container w3-center w3-round-xlarge w3-teal">90%</div>
                                        </div>
                                        <p>Photography</p>
                                        <div class="w3-light-grey w3-round-xlarge w3-small">
                                            <div class="w3-container w3-center w3-round-xlarge w3-teal">
                                                <div class="w3-center w3-text-white">80%</div>
                                            </div>
                                        </div>
                                        <p>Illustrator</p>
                                        <div class="w3-light-grey w3-round-xlarge w3-small">
                                            <div class="w3-container w3-center w3-round-xlarge w3-teal">75%</div>
                                        </div>
                                        <p>Media</p>
                                        <div class="w3-light-grey w3-round-xlarge w3-small">
                                            <div class="w3-container w3-center w3-round-xlarge w3-teal">50%</div>
                                        </div>
                                        <br />

                                        <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                                        <p>English</p>
                                        <div class="w3-light-grey w3-round-xlarge">
                                            <div class="w3-round-xlarge w3-teal"></div>
                                        </div>
                                        <p>Spanish</p>
                                        <div class="w3-light-grey w3-round-xlarge">
                                            <div class="w3-round-xlarge w3-teal"></div>
                                        </div>
                                        <p>German</p>
                                        <div class="w3-light-grey w3-round-xlarge">
                                            <div class="w3-round-xlarge w3-teal"></div>
                                        </div>
                                        <br />
                                    </div>
                                </div><br />

                            </div>

                            <div class="w3-twothird">

                                <div class="w3-container w3-card w3-white w3-margin-bottom">
                                    <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                                    <div class="w3-container">
                                        <h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
                                        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
                                        <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                                        <hr />
                                    </div>
                                    <div class="w3-container">
                                        <h5 class="w3-opacity"><b>Web Developer / something.com</b></h5>
                                        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>
                                        <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                                        <hr />
                                    </div>
                                    <div class="w3-container">
                                        <h5 class="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
                                        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br />
                                    </div>
                                </div>

                                <div class="w3-container w3-card w3-white">
                                    <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                                    <div class="w3-container">
                                        <h5 class="w3-opacity"><b>W3Schools.com</b></h5>
                                        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
                                        <p>Web Development! All I need to know in one place</p>
                                        <hr />
                                    </div>
                                    <div class="w3-container">
                                        <h5 class="w3-opacity"><b>London Business School</b></h5>
                                        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>
                                        <p>Master Degree</p>
                                        <hr />
                                    </div>
                                    <div class="w3-container">
                                        <h5 class="w3-opacity"><b>School of Coding</b></h5>
                                        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>
                                        <p>Bachelor Degree</p><br />
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Portal;