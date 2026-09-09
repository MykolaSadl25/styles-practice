import {List,Item,Type} from "./EventsList.styled"
import { CiLocationOn } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { MdTypeSpecimen } from "react-icons/md";
import { IoTime } from "react-icons/io5";

function EventsList({eventsData}) {
    return <List>{eventsData.map(({name,location,speaker,type,time:{start,end}})=>{
        return <Item key={name}>
            <h2>{name}</h2>
            <p><CiLocationOn /> {location}</p>
            <p><IoPersonSharp /> {speaker}</p>
            <Type type={type}><MdTypeSpecimen /> {type}</Type>
            <p><IoTime /> {start}</p>
            <p><IoTime /> {end}</p>
        </Item>
    })}</List>
}

export default EventsList