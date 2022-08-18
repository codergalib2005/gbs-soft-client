import axios from "axios";

const apiUrl = {
    getToken: "/personal_dashboard",
}
export const authorization = {
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("gbs_course_token")}`
    }
}
export const token = localStorage.getItem("gbs_course_token")