import React from 'react';
import css from './styles/support.module.css'
import {NavLink} from "react-router-dom";

const Support = () => {
        return (
            <div>
                <div>
                    <main className={css.main}>
                        <aside className={css.sidebar}>
                            <nav className={css.nav}>
                                <ul>
                                    <NavLink to={'/me'}><li><a href={'/me'}>Profile</a></li></NavLink>
                                    <NavLink to={'/me/security'}><li><a href={'/security'}>Security</a></li></NavLink>
                                    <NavLink to={'/me/support'}><li className={css.active}><a href={'/support'}>Support</a></li></NavLink>
                                </ul>
                            </nav>
                        </aside>
                    </main>
                </div>
                <div className={css.Wrap}>
                    <div>
                        <section className={css.twitter}>
                            <div className={css.Main}>
                                <div className={css.TitleText}>
                                    <h4 className={css.Title}>
                                        SUPPORT
                                    </h4>
                                </div>
                                <div className={css.DescDiv}>
                                    <h5 className={css.Desc}>
                                        If you have any problems, you can leave a support ticket
                                    </h5>
                                </div>
                                <div>
                                    <div className={css.Wraper}>
                                        <div>
                                            <span>
                                                <input className={css.basicSlide} id="name" type="text" placeholder="Enter your name"/>
                                                <label htmlFor="name">Name</label>
                                            </span>
                                        </div>
                                        <div className={css.Wrapp}>
                                            <span>
                                                <input className={css.basicSlide2} id="name" type="text" placeholder="Enter your name"/>
                                                <label htmlFor="name">Surname</label>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={css.Wrapp2}>
                                            <span>
                                                <input className={css.swing} id="artist" type="text" placeholder="Enter your description here"/>
                                                <label htmlFor="artist">Description</label>
                                            </span>
                                    </div>
                                    <div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
};

export {Support};