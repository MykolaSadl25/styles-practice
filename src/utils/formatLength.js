import { formatDistanceStrict } from "date-fns";
export function formatLength(startTime,endTime){
    return formatDistanceStrict(Date.parse(startTime),Date.parse(endTime))
}