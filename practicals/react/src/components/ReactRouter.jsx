import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
const ReactRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/user/:userId" element={<UserProfile />} />
                </Routes>
            </Router>
        </>
    )
}

export default ReactRouter