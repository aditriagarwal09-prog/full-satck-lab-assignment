
import React from "react";
import "./App.css";

function App() {
    return (
        <div>
            <nav>
                <h2>My Portfolio</h2>
                <div>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <section id="home">
                <h1>Hello, I am Aditri</h1>
                <h2>Web Developer</h2>
                <p>Welcome to my personal portfolio website.</p>
                <a href="#contact">Contact Me</a>
            </section>

            <section id="about">
                <h2>About Me</h2>
                <p>
                    I am an MCA student interested in web development
                    and programming.
                </p>
            </section>

            <section id="skills">
                <h2>My Skills</h2>
                <p>HTML | CSS | JavaScript | Python | React | Java</p>
            </section>

            <section id="projects">
                <h2>My Projects</h2>
                <div className="project">
                    <h3>To-Do List</h3>
                    <p>A task management application.</p>
                </div>
                <div className="project">
                    <h3>Samjho App</h3>
                    <p>A beginner-friendly mobile learning application.</p>
                </div>
            </section>

            <section id="contact">
                <h2>Contact Me</h2>
                <p>Email: your-email@example.com</p>
            </section>

            <footer>
                <p>© 2026 My Portfolio</p>
            </footer>
        </div>
    );
}

export default App;
