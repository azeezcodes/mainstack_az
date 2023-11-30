export function formatDate(inputDate: string) {
   const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
   ];

   const dateParts = inputDate.split("-");
   const year = dateParts[0];
   const monthIndex = parseInt(dateParts[1]) - 1;
   const day = dateParts[2];

   const monthAbbreviation = months[monthIndex];

   return `${monthAbbreviation} ${day}, ${year}`;
}
