import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './home/Home'
import Dashboard from "./dashboard/Dashboard"
import User from "./user/User"
import Login from "./login/Login"
import ForgotPassword from "./login/ForgotPassword"
import NewLogin from "./login/NewLogin"
import Discipline from "./discipline/Discipline"
import Matter from "./matter/Matter"
import Proof from "./proof/Proof"
import Question from "./question/Question"

const RoutePage = () => {
    return(
        <BrowserRouter>

                <Routes>
                    
                    <Route path="/" element={<Login />} />
                    <Route path="/forgot" element={<ForgotPassword />} />
                    <Route path="/newLogin" element={<NewLogin />} />
                    <Route path="/home" element={<Dashboard><Home /></Dashboard>} />
                    <Route path="/user" element={<Dashboard><User /></Dashboard>} />
                    <Route path="/discipline" element={<Dashboard><Discipline /></Dashboard>} />
                    <Route path="/matter" element={<Dashboard><Matter /></Dashboard>} />
                    <Route path="/proof" element={<Dashboard><Proof /></Dashboard>} />
                    <Route path="/question" element={<Dashboard><Question /></Dashboard>} />
                    
                </Routes>            

        </BrowserRouter>
    )
}

export default RoutePage
// <Route path="" element={< />} />