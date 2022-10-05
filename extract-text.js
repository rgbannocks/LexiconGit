function extractText() {
    var listItems=$('#items li'); // text() or val()?
    var result =[];
    var output = new String();
    //let outputarray=listItems.toArray();
    console.log(listItems);
    // for(let index in listItems)
    // {
    //     console.log(listItems[index].textContent());
    // }
    // console.log(listItems.toArray());
    for(let item in listItems)
    {
         console.log(listItems[item]);
         // array.push(item.textContent);
    }
    // document.write(listItems);       // VVVVVVVVVVVVVVVVVVVVVV problem below
    //var listtext=listItems.textContent;
    //console.log(listtext);
    //$(#result).val($listItems);
}