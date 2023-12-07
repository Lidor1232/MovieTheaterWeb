import moment from "moment";

export function onGetFormattedDate({ date }: { date: string }): string {
  return moment(date).format("DD/MM/YYYY HH:MM");
}
