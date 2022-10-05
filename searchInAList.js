function search(){
    let found=$('#searchText').val();
        console.log(found);
    // iterate through li elements
    
    let foundelement=$("li:contains("+found+")");
    foundelement.css("font-weight","bold");
    $('#result').text(foundelement.length+ " matches found");
}