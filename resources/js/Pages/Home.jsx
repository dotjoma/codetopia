import React, { useEffect } from "react";
import "../../css/scrollanimation.css";
import "../../css/Pages/Home.css";
import { Link } from "@inertiajs/react";

export default function Home() {
    useEffect(() => {
        document.title = "CodeTopia | Home";
    }, []);
    return (
        <>
            <main
                style={{
                    height: "100vh",
                    overflowY: "auto",
                    backgroundColor: "#f0f0f0",
                }}
            >
                <section
                    className="heroSection"
                    style={{ backgroundColor: "#2c3e50", color: "#ffffff" }}
                >
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h1 className="display-4 font-monospace fw-bold">
                                Learn programming with CodeTopia
                            </h1>
                            <p className="lead">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Vel amet unde at quae illum
                                fuga, nemo impedit eius est corrupti
                                exercitationem nobis sequi, numquam perspiciatis
                                enim quidem ab, necessitatibus officia.
                            </p>
                            <Link
                                href="/"
                                className="btn btn-lg mt-4"
                                style={{
                                    backgroundColor: "#e67e22",
                                    color: "#ffffff",
                                }}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </section>

                <section
                    className="bg-light d-flex align-items-center justify-content-center"
                    style={{
                        minHeight: "100vh",
                        height: "auto",
                        backgroundColor: "#f0f0f0",
                    }}
                >
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="block col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                <div className="d-grid gap-2">
                                    <div
                                        className="card card-body"
                                        style={{
                                            backgroundColor: "#ffffff",
                                            borderColor: "#2c3e50",
                                        }}
                                    >
                                        <a
                                            className="text-decoration-none"
                                            style={{ color: "#2c3e50" }}
                                            data-bs-toggle="collapse"
                                            href="#firstCollapse"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="firstCollapse"
                                        >
                                            Collapse 1
                                        </a>
                                        <div
                                            className="collapse"
                                            id="firstCollapse"
                                        >
                                            Some placeholder content for the
                                            collapse component. This panel is
                                            hidden by default but revealed when
                                            the user activates the relevant
                                            trigger.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                <div className="d-grid gap-2">
                                    <div
                                        className="card card-body"
                                        style={{
                                            backgroundColor: "#ffffff",
                                            borderColor: "#2c3e50",
                                        }}
                                    >
                                        <a
                                            className="text-decoration-none"
                                            style={{ color: "#2c3e50" }}
                                            data-bs-toggle="collapse"
                                            href="#secondCollapse"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="secondCollapse"
                                        >
                                            Collapse 2
                                        </a>
                                        <div
                                            className="collapse"
                                            id="secondCollapse"
                                        >
                                            Some placeholder content for the
                                            collapse component. This panel is
                                            hidden by default but revealed when
                                            the user activates the relevant
                                            trigger.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="block col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                <div className="d-grid gap-2">
                                    <div className="container-fluid mt-5">
                                        <div
                                            className="border-2 p-3"
                                            tabIndex="0"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseExample"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                            style={{ borderColor: "#2c3e50" }}
                                        >
                                            <h2
                                                className="h5 mb-0"
                                                style={{ color: "#2c3e50" }}
                                            >
                                                Focus me to see content
                                            </h2>
                                        </div>

                                        <div
                                            className="collapse border-top-0 border-2"
                                            id="collapseExample"
                                            style={{ borderColor: "#2c3e50" }}
                                        >
                                            <div className="p-3">
                                                <p>
                                                    tabIndex="0" attribute is
                                                    necessary to make the div
                                                    focusable
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                <div className="d-grid gap-2">
                                    <div className="container-fluid mt-5">
                                        <div
                                            className="border-2 p-3"
                                            tabIndex="0"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseExample"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                            style={{ borderColor: "#2c3e50" }}
                                        >
                                            <h2
                                                className="h5 mb-0"
                                                style={{ color: "#2c3e50" }}
                                            >
                                                Focus me to see content
                                            </h2>
                                        </div>

                                        <div
                                            className="collapse border border-top-0"
                                            id="collapseExample"
                                            style={{ borderColor: "#2c3e50" }}
                                        >
                                            <div className="p-3">
                                                <p>
                                                    tabIndex="0" attribute is
                                                    necessary to make the div
                                                    focusable
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{ height: "1000px" }}></section>
            </main>
        </>
    );
}
