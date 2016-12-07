$(document).ready(function() {
  var card;
  var api = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch="
$('#searchBox').on("keyup", function()  {

  var value = $(this).val();
  if (value.length > 3) {
    var encodedValue = encodeURI(value);
    // ajax call on value
    $.ajax(api + encodedValue,{
      type: "GET",
      datatype: "json",
      success: function (data) {
        console.log(data);
        var ansArr = data.query.search;
      alert(ansArr[0].title)
      },
      error: function(){
        console.log("err");
      }
    })
  }
  // show according to text

});
  // if (text.length >3) {
  // }
});
