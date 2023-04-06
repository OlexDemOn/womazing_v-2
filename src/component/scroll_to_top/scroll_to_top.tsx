import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const body = document.querySelector("#root")

    useEffect(() => {
        body?.scrollIntoView();
    }, [pathname]);

    return null;
}