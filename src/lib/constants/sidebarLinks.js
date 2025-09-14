import { ImStatsBars } from "react-icons/im";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineFeedback } from "react-icons/md";

export const sidebarLinks = [
    {
        title: 'Обзор',
        path: '/dashboard',
        icon: ImStatsBars
    },
    {
        title: 'Граждане',
        path: '/citizens',
        icon: BsFillPeopleFill
    },
    {
        title: 'Услуги и заявления',
        path: '/services',
        icon: MdDesignServices
    },
    {
        title: 'Отчеты и аналитика',
        path: '/reports',
        icon: TbReportSearch
    },
    {
        title: 'Обратная связь',
        path: '/feedback',
        icon: MdOutlineFeedback
    },
]