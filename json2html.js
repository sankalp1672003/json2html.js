export default function json2html(data) {
  // Start creating the HTML table
  let html = `<table data-user="sankalpgoyal1672003@gmail.com">
    <thead>
      <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
    </thead>
    <tbody>`;

  // Loop through the data and add rows to the table
  data.forEach(item => {
    html += `<tr>
      <td>${item.Name}</td>
      <td>${item.Age}</td>
      <td>${item.Gender || ''}</td>
    </tr>`;
  });

  // Close the table tag
  html += `</tbody>
  </table>`;

  return html;
}
