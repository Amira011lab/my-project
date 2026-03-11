import { useState } from "react";
function ThemeToggel() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
// isFemale = true
    // !isFemale
    const appStyles = {
        backgroundColor: darkMode ? "#222" : "#f4f4f4",
        color: darkMode ? "#fff" : "#000",
        padding: "2rem",
        textAlign: "center",
        borderRadius: "10px",
    };

    return (
        <div style={appStyles}>
            <h2>{darkMode ? "Dark Mode" : "Light Mode"}</h2>
            <button onClick={toggleTheme}>
                switch to {darkMode ? "Light" : "Dark"} Mode
            </button>
        </div>
    );
    
}
export default ThemeToggel;
