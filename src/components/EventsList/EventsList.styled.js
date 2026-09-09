import styled from "styled-components";
export const List = styled.ul`
display:flex;
justify-content:center;
align-items: center;
gap: 100px;
flex-wrap: wrap;
margin-top: 50px;
margin-bottom: 50px;
background-color: lightgrey;
`

export const Item = styled.li`
display: flex;
flex-direction: column;
gap: 15px;
padding: 20px;
border: 1px solid black;
background-color: bisque;
border-radius: 25px;
width: 300px;
height: 300px;
transition: all 250ms;

&:hover{
    transform: scale(1.05);
    box-shadow: 0 0 19px black;
}
`
export const Type = styled.p`
font-size: 20px;
color:${props=>{
    switch (props.type) {
        case "free":
            return "green"
        case "paid":
            return "red"
        case "vip":
            return "yellow"
        default:
            return "black"
            break;
    }
}};
`