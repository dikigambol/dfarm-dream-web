/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isInvestor } from '../service/auth/validasi';
import { deleteAllCookies } from '../utils/setToken';

const Investor = (props) => {

    const [curentActive, setCurentActive] = useState('');

    const logout = () => {
        deleteAllCookies()
        window.location.replace('/')
    }
    useEffect(() => {
        const setSidebarType = () => {
            const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (width < 1199) {
                document.getElementById('main-wrapper').setAttribute('data-sidebartype', 'mini-sidebar');
                document.getElementById('main-wrapper').classList.add('mini-sidebar');
            } else {
                document.getElementById('main-wrapper').setAttribute('data-sidebartype', 'full');
                document.getElementById('main-wrapper').classList.remove('mini-sidebar');
            }
        };
        window.addEventListener('resize', setSidebarType);
        setSidebarType();
        return () => {
            window.removeEventListener('resize', setSidebarType);
        };
    }, []);

    const toggleSidebar = () => {
        const mainWrapper = document.getElementById('main-wrapper');
        mainWrapper.classList.toggle('mini-sidebar');
        if (mainWrapper.classList.contains('mini-sidebar')) {
            mainWrapper.setAttribute('data-sidebartype', 'mini-sidebar');
        } else {
            mainWrapper.setAttribute('data-sidebartype', 'full');
        }
    };

    useEffect(() => {
        setCurentActive(props.active)
    }, [props])

    // if (isInvestor()) {
    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <aside className="left-sidebar">
                <div className="sidebar">
                    <div className="brand-logo d-flex align-items-center justify-content-between">
                        <Link to={'/dashboard'} className="text-nowrap logo-img">
                            <img src="/logo.svg" alt="Logo" className="img-fluid" />
                        </Link>
                        <div className="minimize-btn">
                            <button className="btn sidebartoggler" id="sidebarCollapse" onClick={toggleSidebar}>
                                <Icon icon="ant-design:menu-outlined" />
                            </button>
                        </div>
                    </div>
                    <div className="profile">
                        <Link to={'/investor-profile'} >
                            <div className="content">
                                <img src="/user-3.jpg" alt="Profile" className="avatar-profile" />
                                <h6 className="name mb-0">John Doe</h6>
                                <span className="role mt-0">Investor</span>
                            </div>
                        </Link>
                    </div>
                    <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                        <ul id="sidebarnav">
                            <li className="sidebar-item">
                                <Link className={`sidebar-link ${curentActive == 'investor' ? 'active' : ''}`} to={'/investor'} aria-expanded="false">
                                    <Icon icon="mingcute:layout-6-fill" />
                                    <span className="hide-menu">Dashboard</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className={`sidebar-link ${curentActive == 'kandang' ? 'active' : ''}`} to={'/investor-cages'} aria-expanded="false">
                                    <Icon icon="ph:barn-bold" />
                                    <span className="hide-menu">Kandang</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className={`sidebar-link ${curentActive == 'none' ? 'active' : ''}`} to={'#'} onClick={logout} aria-expanded="false">
                                    <Icon icon="majesticons:logout-line" />
                                    <span className="hide-menu">Logout</span>
                                </Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            </aside>
            <div className="right-side">
                <div className='menu-header mb-2'>
                    <div className="brand-logo d-flex align-items-center justify-content-between">
                        <Link to={'/home'} className="text-nowrap logo-img">
                            <img src="/logo.svg" alt="Logo" className="img-fluid" />
                        </Link>
                        <div className="responsive-menu-btn">
                            <button className="btn sidebartoggler" id="sidebarCollapse" onClick={toggleSidebar}>
                                <Icon icon="ant-design:menu-outlined" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    {props.content}
                </div>
            </div>
        </div>
    )
    // }
}


export default Investor