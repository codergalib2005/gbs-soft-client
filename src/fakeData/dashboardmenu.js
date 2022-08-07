import { VscNewFolder, VscNewFile, VscPreview } from 'react-icons/vsc';
import { MdVideoSettings } from 'react-icons/md';
import { ImBlog } from 'react-icons/im';
import { AiOutlineUserSwitch } from 'react-icons/ai';


export const sidebarMenu = [
    {
        icon: <VscNewFolder />,
        name: "New Course",
        link: "newCourse",
    },
    {
        icon: <VscNewFile />,
        name: "New Section",
        link: "newSection",
    },
    {
        icon: <MdVideoSettings />,
        name: "New Video",
        link: "newVideo",
    },
    {
        icon: <ImBlog />,
        name: "New Blog",
        link: "newBlog",
    },
    {
        icon: <AiOutlineUserSwitch />,
        name: "User Handle",
        link: "userHandle",
    },
    {
        icon: <VscPreview />,
        name: "Review",
        link: "review",
    }
]