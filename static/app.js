




// აქ ვიწყებ სელექტ მენიუს ფუნქციას
function optionSelected() {
    var selectElement = document.getElementById("options");
    var selectedOption = selectElement.value;
    if (selectedOption === "like") {
         showalldata(); 
    }
    if (selectedOption === "all_regular") {
        getallregular();
        showsection2()
    }
    if (selectedOption === "all_premium") {
        getallpremium();
        showsection2()
    }
    if (selectedOption === "all_super") {
        getallsuper();
        showsection2()
    }
    if (selectedOption === "all_dissel") {
        getalldissel();
        showsection2()
    }
    if (selectedOption === "all_gass") {
        getallgass();
        showsection2()
    }
    
  }

// აქ ვიწყებ  საწვავების ტიპების მიხედვით გაფილტვრას აღებას, მიბმული მაქ სელექტზე
var section1=document.querySelector(".section1")
var section2=document.querySelector(".section2") // ვიღებ მეორე სექციას და ვაქრობ
function  showalldata(){ // ამ ფუნქციას თუ ვუშვებ ვაქრობ სექცია2 კონკრეტულ ძების შედეგს
  
    section1.style.display = 'flex'; //პირვლ სექციას ვაჩენ მხოლოდ აქ
    section2.textContent="" 
    section2.style.display="none"
}
function showsection2() { // ამ ფუნქციას ვაბავ სლექტებზე, თუ რამეს გაფილტვრქა უნდა მაშინ გამოჩნდბა ეს სექცია
    section2.style.display = 'block';
    section2.style.backgroundColor = 'rgb(200, 223, 223)';
}
// აქ ავხსნი და ყველა ფუნქციაზე იგივეა ქვემოთ მარტო სახელბს ვცვლი
function getallregular(){ // ეს ძირი ფუნქცია ამას ვიზაებ სლექტეზე 
    section1.style.display = 'none'; // რადაგნ მომხრებლმა ფილტრი აირჩია სექცია 1ს ვაქრობ
    function getDataFromList2() { // ეს ფუნქცია ჰტმლ ფაილს გადუვლის აიღებს ყველა "class", შევყრი ცვლადში და დავრენდერებ
        var listItems = document.getElementsByClassName("euro_regular"); // ყველა ამ კლასისას დავიჭერ
        var data_all_regular = []; //ეს ცარელია ივსება ფორ ლუპით, და მერე ვაჩენ
    
        for (var i = 0; i < listItems.length; i++) { // ეს გადუვლის ყველა დაჭერილ კლას
            var data1 = listItems[i].textContent; 
            data_all_regular.push(data1); // ზემოთ ცვლადს დავუმტებ ყველა დაჭერილ კლასის ველიუს
        }

        
        return data_all_regular; // ეს ფუნქციამიბრუნებს ყველა რეგულრს, ჰტმლ გვერდიდან
    } getDataFromList2()

    var all_regular=getDataFromList2() // აქ ცვლადში გადავისროლე, ფუნქციის დაბრუნებლ~ლი დატა
    var section2=document.querySelector(".section2") // ვიღებ სექცი 2 ვასუფთავებ და ხელახლა ვავსებინებ ამვე ფუნქციას
    section2.textContent="" // ხელახა შევსება წირდება რადგან სხვა ფუნქციამ თუ შეავსო, ამან გასუფტავოს და თავის შეავსოს

    all_regular.forEach(element => { // ამ ლუპით ჩემს დაჭერილ ყველა რეგულრსის ცვლადს გადვუვლი და
        let paragraph = document.createElement("p"); // შევქმნი პარგრაფ ელმნტს იმდენს რამდნი დატაც იქნება
        paragraph.textContent=element //ტექსტს გადავცემ დატას
        section2.appendChild(paragraph) // დავუმატებ შვილად ჰტმლ დოკუმენტს

    });

}
//აქ ყველა ფუნქცია რაცა ახსნილი მაქ ზემოთ 
// ავიღე პრემიუმი ყველა 
function getallpremium(){
    section1.style.display = 'none';
    function getDataFromList2() {
        var listItems = document.getElementsByClassName("premium");
        var data_all_regular = [];
    
        for (var i = 0; i < listItems.length; i++) {
            var data1 = listItems[i].textContent;
            data_all_regular.push(data1);
        }

        
        return data_all_regular;
    } getDataFromList2()

    var all_regular=getDataFromList2()
    var section2=document.querySelector(".section2")
    section2.textContent=""

    all_regular.forEach(element => {
        let paragraph = document.createElement("p");
        paragraph.textContent=element
        section2.appendChild(paragraph)

    });

}


// ავიღე სუპერი ყველა 
function getallsuper(){
    section1.style.display = 'none';
    function getDataFromList2() {
        var listItems = document.getElementsByClassName("super");
        var data_all_regular = [];
    
        for (var i = 0; i < listItems.length; i++) {
            var data1 = listItems[i].textContent;
            data_all_regular.push(data1);
        }

        
        return data_all_regular;
    } getDataFromList2()

    var all_regular=getDataFromList2()
    var section2=document.querySelector(".section2")
    section2.textContent=""

    all_regular.forEach(element => {
        let paragraph = document.createElement("p");
        paragraph.textContent=element
        section2.appendChild(paragraph)

    });

}

// ავიღე dizeli ყველა 
function getalldissel(){
    section1.style.display = 'none';
    function getDataFromList2() {
        var listItems = document.getElementsByClassName("euro_dissel");
        var data_all_regular = [];
    
        for (var i = 0; i < listItems.length; i++) {
            var data1 = listItems[i].textContent;
            data_all_regular.push(data1);
        }

        
        return data_all_regular;
    } getDataFromList2()

    var all_regular=getDataFromList2()
    var section2=document.querySelector(".section2")
    section2.textContent=""

    all_regular.forEach(element => {
        let paragraph = document.createElement("p");
        paragraph.textContent=element
        section2.appendChild(paragraph)

    });

}

// ავიღე gass ყველა 
function getallgass(){
    section1.style.display = 'none';
    function getDataFromList2() {
        var listItems = document.getElementsByClassName("gass");
        var data_all_regular = [];
    
        for (var i = 0; i < listItems.length; i++) {
            var data1 = listItems[i].textContent;
            data_all_regular.push(data1);
        }

        
        return data_all_regular;
    } getDataFromList2()

    var all_regular=getDataFromList2()
    var section2=document.querySelector(".section2")
    section2.textContent=""

    all_regular.forEach(element => {
        let paragraph = document.createElement("p");
        paragraph.textContent=element
        section2.appendChild(paragraph)

    });

}