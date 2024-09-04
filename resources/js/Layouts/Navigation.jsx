import { Link } from "@inertiajs/react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import React, { useState, useEffect, useRef } from "react";

export const Navigation = () => {
    const [inputValue, setInputValue] = useState("");
    const [searchResults, setSearchResults] = useState([]); // State for search results

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        performSearch(e.target.value);
    };

    const clearInput = () => {
        setInputValue("");
        setSearchResults([]); // Clear search results
    };

    const performSearch = (query) => {
        // Example data to search from
        const data = [
            { name: "Learn REACT", path: "/react" },
            { name: "Learn INERTIA", path: "/inertia" },
            { name: "Learn LARAVEL", path: "/laravel" },
            { name: "Learn VUE", path: "/vue" },
            { name: "Learn ANGULAR", path: "/angular" },
            { name: "Install React", path: "/react/getstarted/installation" },
        ];

        if (query) {
            const results = data.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    // Auto focus input in Modal start.
    const myModalRef = useRef(null);
    const myInputRef = useRef(null);

    useEffect(() => {
        const handleShown = () => {
            myInputRef.current.focus();
        };

        const searhBoxModal = myModalRef.current;
        searhBoxModal.addEventListener("shown.bs.modal", handleShown);

        return () => {
            searhBoxModal.removeEventListener("shown.bs.modal", handleShown);
        };
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand text-light font-monospace fw-bold"
                        href="/"
                        style={{
                            marginLeft: "5vh",
                        }}
                    >
                        CodeTopia
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <HiOutlineDotsVertical />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle text-light"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Tutorials
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/react"
                                        >
                                            Learn REACT
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/inertia"
                                        >
                                            Learn INERTIA
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="/laravel"
                                        >
                                            Learn LARAVEL
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div className="d-flex">
                            {/* Trigger Search Modal */}
                            <div className="">
                                <button
                                    type="button"
                                    className="searchButton btn-outline-light border-0"
                                    data-bs-toggle="modal"
                                    data-bs-target="#searhBoxModal"
                                >
                                    <span className="DocSearch-Button-Container">
                                        <svg
                                            width="20"
                                            height="20"
                                            className="DocSearch-Search-Icon"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                                                stroke="currentColor"
                                                fill="none"
                                                fillRule="evenodd"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        <span className="DocSearch-Button-Placeholder">
                                            Search
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Modal */}
                        <div
                            className="modal fade"
                            ref={myModalRef}
                            id="searhBoxModal"
                            data-bs-keyboard="true"
                            tabIndex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div
                                            className="searchBarBG input-group"
                                            style={{
                                                backgroundColor: "#0d6efd",
                                            }}
                                        >
                                            <span
                                                className="input-group-text"
                                                id="basic-addon1"
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    className="DocSearch-Search-Icon"
                                                    viewBox="0 0 20 20"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                                                        stroke="#0d6efd"
                                                        fill="none"
                                                        fillRule="evenodd"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <input
                                                type="text"
                                                id="myInput"
                                                ref={myInputRef}
                                                className="searchBar form-control border-0"
                                                placeholder="Search"
                                                aria-label="Search"
                                                aria-describedby="basic-addon1"
                                                value={inputValue}
                                                onChange={handleInputChange}
                                            />

                                            {inputValue && (
                                                <button
                                                    type="button"
                                                    title="Clear the query"
                                                    className="DocSearch-Reset border-0"
                                                    aria-label="Clear the query"
                                                    onClick={clearInput}
                                                    style={{
                                                        backgroundColor:
                                                            "#ffff",
                                                        boxShadow: "none",
                                                        padding: "0",
                                                        margin: "0",
                                                        outline: "none",
                                                        border: "none",
                                                        borderTopRightRadius:
                                                            "6px",
                                                        borderBottomRightRadius:
                                                            "6px",
                                                    }}
                                                >
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        style={{
                                                            display: "block",
                                                        }}
                                                    >
                                                        <path
                                                            d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="modal-body bg-light">
                                        {searchResults.length > 0 ? (
                                            <table className="table table-hover">
                                                <tbody>
                                                    {searchResults.map(
                                                        (result, index) => (
                                                            <tr key={index}>
                                                                <td>
                                                                    <a
                                                                        href={
                                                                            result.path
                                                                        }
                                                                        className="text-decoration-none text-dark"
                                                                    >
                                                                        {
                                                                            result.name
                                                                        }
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        ) : (
                                            <p>No results found</p>
                                        )}
                                    </div>
                                    <div className="modal-footer">
                                        <p>Test Footer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
