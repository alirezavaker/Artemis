/**
 * Initiate Datatables
 */
let dataTable = new simpleDatatables.DataTable("#datatable", {
  searchable: true,
  fixedHeight: false,
  labels: {
    placeholder: "جستجو ...",
    perPage: "{select} تعداد نمایش",
    info: "نمایش {start} از {end} :: تعداد کل موارد {rows} مورد است.",
    noResults: "مورد منطبقی یافت نشد",
  },
  columns: [
    // Sort the second column in ascending order
    { select: [0, 1, 2, 4], sortable: false },
  ],
});

/**
 * Scrool header
 */

$(".arrow-down").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".second").offset().top,
    },
    "slow"
  );
});

// api
const api_url = "";
// func
async function getapi(url) {
  const response = await fetch(url);

  var data = await response.json();
  console.log(data);
  if (!response) {
    console.log("fuck API");
  }
  show(data);
}
function show(data) {
  let tabshow = 
  `<tr>
    <th>Name</th>
    <th>Office</th>
    <th>Position</th>
    </tr>`;
    for(let x of data.list){
      tabshow+= `<tr> 
      <td>${x.name} </td>
      <td>${x.famil}</td>
      <td>${x.sen}</td>         
  </tr>`
    }
    document.getElementById("saaasas").innerHTML = tabshow
}
