import React from 'react';
import {NavLink} from "react-router-dom";

import css from './styles/user.module.css'

const User = () => {
        return (
            <div className={css.Body}>
                <div className={css.Wrap}>
                        <main className={css.main}>
                            <aside className={css.sidebar}>
                                <nav className={css.nav}>
                                    <ul>
                                        <NavLink to={'/me'}><li className={css.active}><a href={'/me'}>Profile</a></li></NavLink>
                                        <NavLink to={'/me/security'}><li><a href={'/security'}>Security</a></li></NavLink>
                                        <NavLink to={'/me/support'}><li><a href={'/support'}>Support</a></li></NavLink>
                                    </ul>
                                </nav>
                            </aside>
                        </main>
                    <section className={css.twitter}>
                        <div className={css.container}>
                            <div className={css.UserWrap}>
                                <div className={css.TitleLogo}>
                                    <div className={css.flex}>
                                        <div className={css.UserLogo}>
                                            <div className={css.UserTitle}>
                                                <h4 className={css.Title}>SSSTEFASHKA</h4>
                                            </div>
                                            <img src='https://i.pinimg.com/564x/e8/d5/2b/e8d52bf998a1c137c5caddb1008a62e3.jpg' alt="" className={css.Logo}/>
                                        </div>

                                        <div className={css.NameSurname}>
                                            <div className={css.block}>
                                                <div className={css.flex}>
                                                    <div className={css.UserName}>
                                                        <h5 className={css.Name}>Stefan</h5>
                                                    </div>

                                                    <div className={css.UserSurname}>
                                                        <h5 className={css.Name}>Samokhval</h5>
                                                    </div>
                                                </div>

                                                <div className={css.UserDesc}>
                                                    <h1 className={css.Desc}>
                                                        Hello. My name is Stefan and I am 17 years old. I've been into computers since
                                                        I was 6 years old and started learning programming since I was 10.
                                                    </h1>
                                                    <h1 className={css.Desc}>
                                                        I took my first step in programming at STEP Computer Academy.
                                                        There I studied the basics of computers, programming, design and robotics.
                                                        For the first time in my life, I met the Python language there. At first I wrote
                                                        simple programs, wrote mini-games, but also passed exams.
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className={css.Desc2}>
                                            After passing all the exams - after 5 years, I became a graduate of the academy.
                                            After that, I completely taught Python myself for 2 years and still decided to
                                            take courses from Webnauts. There I studied backend programming in Python Django.
                                            Made API on REST, FAST. and Studied ORM with OOP.
                                        </h1>
                                        <h1 className={css.Desc2}>
                                            Then I was hired by Webnauts, but I wanted more.
                                            I went to courses from OktenWeb and they changed all the thinking in my life.
                                            I started to look at the code differently, sorted out all the things that were
                                            incomprehensible to me, and now, I am writing a project in ReactJS. To be honest,
                                            these are the best courses I've been to.
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
};

export {User};