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

    const handleCopy = () => {
        navigator.clipboard.writeText("laravel new example-app");
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
                            <h1>Installation of React, Inertia and Laravel</h1>
                            <div
                                className="card p-3 rounded-3"
                                style={{ position: "relative" }}
                            >
                                <div className="card-body text-white bg-primary d-flex flex-column flex-md-row align-items-center">
                                    <p className="fw-bold fs-4 mb-3 mb-md-0">
                                        laravel new example-app
                                    </p>
                                    <button
                                        onClick={handleCopy}
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
                )}
            </div>
        </>
    );
};

export default Installation;
