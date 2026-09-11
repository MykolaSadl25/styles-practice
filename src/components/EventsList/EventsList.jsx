import { List,Item,Type } from "./EventsList.styled"
import { CiLocationOn,CiCalendarDate } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { MdTypeSpecimen } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { formatDate } from "../../utils/formatDate";
import { formatLength } from "../../utils/formatLength";
import dayjs from '@hamzaka/dayjs'

function EventsList({eventsData}) {
    return <List>{eventsData.map(({name,location,speaker,type,time:{start,end}})=>{
        return <Item key={name}>
            <h2>{name}</h2>
            <p><CiLocationOn /> {location}</p>
            <p><IoPersonSharp /> {speaker}</p>
            <Type type={type}><MdTypeSpecimen /> {type}</Type>
            {/* <p><CiCalendarDate /> {format(Date.parse(start),"dd MMMM yyyy, HH:mm")}</p> */}
             {/* <p><CiCalendarDate /> {formatDate(start)}</p> */}
            {/* <p><IoTime /> {formatDistanceStrict(Date.parse(start), Date.parse(end))}</p> */}
            {/* <p><IoTime /> {formatLength(start,end)}</p> */}
            <p><CiCalendarDate /> {dayjs(start).format("DD MMMM YYYY, HH:mm")}</p>
            <p><IoTime /> {dayjs(end).diff(dayjs(start),"hours")} hours</p>
        </Item>
    })}</List>
}

export default EventsList