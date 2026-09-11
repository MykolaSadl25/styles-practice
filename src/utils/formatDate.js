import { format } from "date-fns";

export function formatDate(date){
    return format(Date.parse(date), "dd MMMM yyyy, HH:mm")
}