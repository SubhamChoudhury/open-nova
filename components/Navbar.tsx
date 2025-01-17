import Link from "next/link";
import {useRouter} from "next/router"
import { useEffect, useState } from "react"

const Navbar = ()=>{
    const router = useRouter()
    const [route,setRoute] = useState("");

    useEffect(()=>{
        setRoute(router.route.split('/')[2])
        console.log(route)
    },[router.route])

    const checkIfActive = (item:string):string =>{
        return item === route ? " active-nav-link" : ""
    }
    return(
        <nav className="theme-bg-accent w-1/5 h-screen">
            <div className="flex flex-row mt-20 justify-evenly font-">
                <div className="">Logo</div><p className="theme-text font-medium text-2xl">Open Nova</p>
            </div>
            <ul className="mt-48 flex flex-col items-start pl-8 theme-text font-medium text-xl">
                <li className={"mb-2 w-full py-3 pl-5 rounded-l-full" + checkIfActive("dashboard")}>
                    <Link href="/user/dashboard">
                        <a>
                            Dashboard
                        </a>
                    </Link>
                </li>
                <li className={"mb-2 w-full py-3 pl-5 rounded-l-full" + checkIfActive("scheduled-tweets")}>
                    <Link href='/user/scheduled-tweets'>
                        <a>
                            Scheduled Tweets
                        </a>
                    </Link>
                </li>
                <li className={"mb-7 w-full py-2 pl-5 rounded-l-full" + checkIfActive("new-tweet")}>
                    <Link href="/user/new-tweet">
                        <a>
                            New Tweet
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar