import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./styles/security.module.css";

const Security = () => {
        return (
            <div>
                <div>
                    <main className={css.main}>
                        <aside className={css.sidebar}>
                            <nav className={css.nav}>
                                <ul>
                                    <NavLink to={'/me'}><li><a href={'/me'}>Profile</a></li></NavLink>
                                    <NavLink to={'/me/security'}><li className={css.active}><a href={'/security'}>Security</a></li></NavLink>
                                    <NavLink to={'/me/support'}><li><a href={'/support'}>Support</a></li></NavLink>
                                </ul>
                            </nav>
                        </aside>
                    </main>
                </div>
                <div className={css.Wrap}>
                    <section className={css.twitter}>
                        <div className={css.Wraps}>
                            <div className={css.UserNameMain}>
                                <div className={css.UsernameDiv}>
                                    <h4 className={css.Username}>USERNAME</h4>
                                </div>
                                <div className={css.InputUsername}>
                            <span>
                                <input className={css.balloon} id="galaxy" type="text" placeholder="Enter a Username"/>
                                <label htmlFor="galaxy">Username</label>
                            </span>
                                </div>
                                <div className={css.InputUsername}>
                            <span>
                                <input className={css.balloonEr} id="galaxy" type="text" placeholder="Enter a your password"/>
                                <label htmlFor="galaxy">Password</label>
                            </span>
                                    <hr className={css.outline}/>
                                </div>
                            </div>
                            <div className={css.PasswordMain}>
                                <div className={css.UsernameDiv}>
                                    <h4 className={css.Username}>PASSWORD</h4>
                                </div>
                                <div className={css.InputPassword}>
                                <span>
                                    <input className={css.balloon} id="galaxy" type="text" placeholder="Enter a new Password"/>
                                    <label htmlFor="galaxy">Password</label>
                                </span>
                                </div>
                                <div className={css.InputPassword}>
                                <span>
                                    <input className={css.balloonEr} id="galaxy" type="text" placeholder="Retype new Password"/>
                                    <label htmlFor="galaxy">New password</label>
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className={css.Wraps2}>
                            <div className={css.UserNameMain}>
                                <div className={css.UsernameDiv}>
                                    <h4 className={css.Username}>EMAIL</h4>
                                </div>
                                <div className={css.InputUsername}>
                            <span>
                                <input className={css.balloon} id="galaxy" type="text" placeholder="Enter a new Email"/>
                                <label htmlFor="galaxy">Email</label>
                            </span>
                                </div>
                                <div className={css.InputUsername}>
                            <span>
                                <input className={css.balloonEr} id="galaxy" type="text" placeholder="Enter a your password"/>
                                <label htmlFor="galaxy">Password</label>
                            </span>
                                </div>
                            </div>
                            <div className={css.PasswordMain}>
                                <div className={css.UsernameDiv}>
                                    <h4 className={css.Username}>PHONE</h4>
                                </div>
                                <div className={css.InputPassword}>
                                <span>
                                    <input className={css.balloon} id="galaxy" type="text" placeholder="Enter a new Phone"/>
                                    <label htmlFor="galaxy">New Phone</label>
                                </span>
                                </div>
                                <div className={css.InputPassword}>
                                <span>
                                    <input className={css.balloonEr} id="galaxy" type="text" placeholder="Type a Email Code"/>
                                    <label htmlFor="galaxy">Email Code</label>
                                </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
};

export {Security};