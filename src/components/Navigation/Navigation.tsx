import React, {FC} from 'react';
import { Link } from "react-router-dom";

const Navigation: FC = () => {

    return (
        <nav className="flex justify-between items-center text-slate-100 p-3 bg-indigo-800">
            <span className="text-xl font-bold">News Searcher</span>
            <div>
                <Link className="mx-2 hover:text-amber-400" to={"/"}>Latest News</Link>
                <Link className="ml-2 hover:text-amber-400" to={"/login"}>Log In</Link>
            </div>
        </nav>
    );
}

export default Navigation;