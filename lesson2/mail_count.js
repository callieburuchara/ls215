function mailCount(emailData) {
  let emails = emailData.split('##||##').map(email => email.split('#/#'));
  
  let AllDates = emails.map(sub => {
    return sub.filter(email => email.substring(1, 5) === 'Date')
  }).flat();

  AllDates = AllDates.map(date => date.slice(7)).sort();
  let earliest = formatDate(AllDates[0]);
  let latest = formatDate(AllDates[AllDates.length - 1]);
  
  console.log(`Count of Email: ${emails.length}`);
  console.log(`Date Range: ${earliest} - ${latest}`);
  
}

function formatDate(date) {
  const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
                  'Sept', 'Oct', 'Nov', 'Dec'];
                  

  date = new Date(date);
  let day = weekDays[date.getDay()];
  let month = months[date.getMonth()];
  let numDay = date.getDate();
  let year = date.getFullYear();

  return day + ' ' + month + ' ' + numDay + ' ' + year;
}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
