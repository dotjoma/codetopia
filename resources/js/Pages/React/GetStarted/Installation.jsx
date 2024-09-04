import React, { useState, useEffect } from "react";
import "../../../../css/sidebar.css";
import { Link } from "@inertiajs/react";
import { FaCopy } from "react-icons/fa"; // Import the copy icon
import Swal from "sweetalert2"; // Import SweetAlert2

const Installation = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isBurgerHidden, setIsBurgerHidden] = useState(true);
    const [isSecondColumnVisible, setIsSecondColumnVisible] = useState(true);
    const [is480Px, setIs480Px] = useState(true);
    const [is768Px, setIs768Px] = useState(true);

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleCopy = ({ text }) => {
        navigator.clipboard.writeText(text);
        Swal.fire({
            icon: "success",
            title: "Copied!",
            text: "Text copied to clipboard.",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 991) {
                setSidebarVisible(false);
                setIsSidebarOpen(false);
                setIsBurgerHidden(true);
            } else {
                setSidebarVisible(true);
                setIsSidebarOpen(true);
                setIsBurgerHidden(false);
            }

            if (window.innerWidth <= 480 && isSidebarOpen) {
                setIsSecondColumnVisible(false);
            } else {
                setIsSecondColumnVisible(true);
            }

            if (window.innerWidth <= 768) {
                setIs768Px(true);
            } else {
                setIs768Px(false);
            }

            if (window.innerWidth <= 480) {
                setIs480Px(true);
            } else {
                setIs480Px(false);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const showBurgerIcon = () => {
        setIsSidebarOpen((prevVisibility) => !prevVisibility);
        isSidebarOpen ? setSidebarVisible(false) : setSidebarVisible(true);

        if (window.innerWidth <= 480 && !isSidebarOpen) {
            setIsSecondColumnVisible(false);
        } else {
            setIsSecondColumnVisible(true);
        }
    };
    return (
        <>
            {isBurgerHidden && (
                <button
                    onClick={showBurgerIcon}
                    style={{
                        color: "#fff",
                        fontSize: "25px",
                        background: "none",
                        border: "none",
                        position: "absolute",
                        top: "0",
                        marginTop: "1vh",
                        left: "2vh",
                        outline: "none",
                    }}
                >
                    {isSidebarOpen ? "X" : "☰"}
                </button>
            )}

            <div className="d-flex">
                {isSidebarVisible && (
                    <div
                        className={`sidebar ${is480Px ? "col-md-2" : "col-sm-2"}
                        ${is768Px ? "col-md-3" : "col-md-2"} p-3 bg-light`}
                    >
                        <div className="sidebar-logo mb-4">
                            <Link
                                onClick={handleRefresh}
                                className="nav-link fw-bold"
                            >
                                REACT TUTORIAL
                            </Link>
                        </div>

                        <div className="sidebar-items col-4 w-auto">
                            <h6>Getting Started</h6>
                            <div id="list-example" className="list-group">
                                <Link
                                    className="list-group-item list-group-item-action"
                                    href="/react/getstarted/installation"
                                >
                                    Installation
                                </Link>
                                <Link
                                    className="list-group-item list-group-item-action"
                                    href=""
                                >
                                    Reserve
                                </Link>
                                <Link
                                    className="list-group-item list-group-item-action"
                                    href=""
                                >
                                    Reserve
                                </Link>
                                <Link
                                    className="list-group-item list-group-item-action"
                                    href=""
                                >
                                    Reserve
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                {isSecondColumnVisible && (
                    <div className="main col p-3">
                        <div className="col">
                            <h3 className="mb-4">
                                Installation of React, Inertia and Laravel
                            </h3>
                            <div className="mb-4">
                                you may create a new Laravel project via
                                Composer's create-project command:
                                <div
                                    className="card p-3 rounded-3"
                                    style={{ position: "relative" }}
                                >
                                    <div className="card-body text-white bg-primary d-flex flex-column flex-md-row align-items-center rounded-3">
                                        <p
                                            className="fw-bold  fs-md-3 fs-lg-2 mb-3 mb-md-0"
                                            id="nonGlobalInstallation"
                                        >
                                            composer create-project
                                            laravel/laravel example-app
                                        </p>
                                        <button
                                            onClick={() =>
                                                handleCopy({
                                                    text: document.getElementById(
                                                        "nonGlobalInstallation"
                                                    ).innerText,
                                                })
                                            }
                                            className="ms-md-auto"
                                            style={{
                                                background: "none",
                                                border: "none",
                                                color: "#fff",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <FaCopy size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                Or, you may create new Laravel projects by
                                globally installing the Laravel installer via
                                Composer. The Laravel installer allows you to
                                select your preferred testing framework,
                                database, and starter kit when creating new
                                applications:
                                <div
                                    className="card p-3 rounded-3"
                                    style={{ position: "relative" }}
                                >
                                    <div className="card-body text-white bg-primary d-flex flex-column flex-md-row align-items-center rounded-3">
                                        <p
                                            className="fw-bold  fs-md-3 fs-lg-2 mb-3 mb-md-0"
                                            id="globalInstallation"
                                        >
                                            laravel new example-app
                                        </p>
                                        <button
                                            onClick={() =>
                                                handleCopy({
                                                    text: document.getElementById(
                                                        "globalInstallation"
                                                    ).innerText,
                                                })
                                            }
                                            className="ms-md-auto"
                                            style={{
                                                background: "none",
                                                border: "none",
                                                color: "#fff",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <FaCopy size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                Once the project has been created, go to the app
                                directory by using:{" "}
                                <span className="fw-bold">cd example-app</span>
                                <div
                                    className="card p-3 rounded-3"
                                    style={{ position: "relative" }}
                                >
                                    <div className="card-body text-white bg-primary d-flex flex-column flex-md-row align-items-center mb-2 rounded-3">
                                        <p
                                            className="fw-bold  fs-md-3 fs-lg-2 mb-3 mb-md-0"
                                            id="installReact-React-Dom"
                                        >
                                            npm install react react-dom
                                        </p>
                                        <button
                                            onClick={() =>
                                                handleCopy({
                                                    text: document.getElementById(
                                                        "installReact-React-Dom"
                                                    ).innerText,
                                                })
                                            }
                                            className="ms-md-auto"
                                            style={{
                                                background: "none",
                                                border: "none",
                                                color: "#fff",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <FaCopy size={20} />
                                        </button>
                                    </div>

                                    <div className="card-body text-white bg-primary d-flex flex-column flex-md-row align-items-center rounded-3">
                                        <p
                                            className="fw-bold  fs-md-3 fs-lg-2 mb-3 mb-md-0"
                                            id="installViteJs-Plugin-React"
                                        >
                                            npm install save-dev
                                            @vitejs/plugin-react
                                        </p>
                                        <button
                                            onClick={() =>
                                                handleCopy({
                                                    text: document.getElementById(
                                                        "installViteJs-Plugin-React"
                                                    ).innerText,
                                                })
                                            }
                                            className="ms-md-auto"
                                            style={{
                                                background: "none",
                                                border: "none",
                                                color: "#fff",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <FaCopy size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                Time to install{" "}
                                <span className="fw-bold fs-5">Inertia</span>
                                <div
                                    className="card p-3 rounded-3"
                                    style={{ position: "relative" }}
                                >
                                    <div className="card-body text-white bg-primary d-flex flex-column flex-md-row align-items-center rounded-3">
                                        <p
                                            className="fw-bold  fs-md-3 fs-lg-2 mb-3 mb-md-0"
                                            id="InertiaInstallation"
                                        >
                                            composer require
                                            inertiajs/inertia-laravel
                                        </p>
                                        <button
                                            onClick={() =>
                                                handleCopy({
                                                    text: document.getElementById(
                                                        "InertiaInstallation"
                                                    ).innerText,
                                                })
                                            }
                                            className="ms-md-auto"
                                            style={{
                                                background: "none",
                                                border: "none",
                                                color: "#fff",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <FaCopy size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Installation;
