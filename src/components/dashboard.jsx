import { Icon } from '@iconify/react/dist/iconify.js'
// import main from '../lip/main';
import { useState, useEffect, Fragment } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteAllCookies, getTokenFromCookie } from '../utils/setToken';
import { useLogin } from '../service/auth';

const Dashboard = (props) => {

    const [curentActive, setCurentActive] = useState('');

    let token = getTokenFromCookie()
    const { verifyToken, tokenStatus } = useLogin()

    useEffect(() => {
        async function tokenLoad() {
            await verifyToken(token)
        }
        tokenLoad()
        if (tokenStatus == false) {
            deleteAllCookies()
            window.location.replace('/')
        }
    }, [token, tokenStatus])


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

    return (
        <Fragment>
            {tokenStatus ?
                <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                    <aside className="left-sidebar">
                        <div className="sidebar">
                            <div className="brand-logo d-flex align-items-center justify-content-between">
                                <Link to={'/dashboard'} className="text-nowrap logo-img">
                                    <img src="./logo.svg" alt="Logo" className="img-fluid" />
                                    <span>Farm</span>
                                    <span>Dream</span>
                                </Link>
                                <div className="minimize-btn">
                                    <button className="btn sidebartoggler" id="sidebarCollapse" onClick={toggleSidebar}>
                                        <Icon icon="ant-design:menu-outlined" />
                                    </button>
                                </div>
                            </div>

                            <div className="profile">
                                <div className="content">
                                    <img src="./user-1.jpg" alt="" className="avatar-profile" />
                                    <h6 className="name mb-0">John Doe</h6>
                                    <span className="role mt-0">Admin</span>
                                </div>
                            </div>
                            <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                                <ul id="sidebarnav">
                                    <li className="sidebar-item">
                                        <Link className={`sidebar-link ${curentActive == 'dashboard' ? 'active' : ''}`} to={'/dashboard'} aria-expanded="false">
                                            <Icon icon="mingcute:layout-6-fill" />
                                            <span className="hide-menu">Dashboard</span>
                                        </Link>
                                    </li>

                                    <li className="sidebar-item">
                                        <Link className={`sidebar-link ${curentActive == 'dataUser' ? 'active' : ''}`} to={'/users'} aria-expanded="false">
                                            <Icon icon="mdi:users" />
                                            <span className="hide-menu">Users</span>
                                        </Link>
                                    </li>

                                    <li className="sidebar-item">
                                        <Link className={`sidebar-link ${curentActive == 'dataCages' ? 'active' : ''}`} to={'/cages'} aria-expanded="false">
                                            <Icon icon="fe:cage" />
                                            <span className="hide-menu">Cage Data</span>
                                        </Link>
                                    </li>

                                    <li className="sidebar-item">
                                        <Link className={`sidebar-link ${curentActive == 'dataCost' ? 'active' : ''}`} to={'/cost'} aria-expanded="false">
                                            <Icon icon="iconamoon:component" />
                                            <span className="hide-menu">Component</span>
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
                    <div className="content-wrapper">
                        <div className="container-fluid">
                            {props.content}
                        </div>
                    </div>
                </div>
                : null
            }
        </Fragment>
    )
}

export default Dashboard