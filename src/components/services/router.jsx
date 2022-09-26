import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Read from '../pages/Read';
import Create from '../pages/Create';
import Login from '../pages/Login';
import Testes from  '../pages/Testes';

export default function Rotas() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Testes />} />
                <Route path="/Read" element={<Read />} />
                <Route path="/Create" element={<Create />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
    )
}
