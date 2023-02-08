let obj;

// on load store url params
window.onload = function() {
    let params = new URL(document.location).searchParams;
    obj = {
        
        "title": params.get('title'),
        "firstName": params.get('firstName'),
        "lastName": params.get('lastName'),
        "emailId": params.get('emailId'),
        "phoneNumber": params.get('phoneNumber'),
        "streetAddress1": params.get('streetAddress1'),
        "streetAddress2": params.get('streetAddress2'),
        "city": params.get('city'),
        "state": params.get('state'),
        "zipcode": params.get('zipcode'),
        "comments": params.get('text'),
        "checkDrink": params.get('checkDrink'),
        "drink": params.get('drink'),
        "source": getSocialValue(params),
        "drinkValue": params.get('drinkValue')
    }

    displayTable();
}

// to get a string from all social media values
let getSocialValue = (params) => {
    let social = "";
    social= params.get("source");
   console.log(social)
    // social = social.substr(0, social.length - 2)
    return social;
};

// to populate form value in table
let displayTable = function() {
    let tbody = document.querySelector("#table tbody");
    tbody.children[0].children[1].innerHTML = obj.title ? obj.title.toUpperCase() : "-";
    tbody.children[1].children[1].innerHTML = obj.firstName ? obj.firstName : "-";
    tbody.children[2].children[1].innerHTML = obj.lastName ? obj.lastName : "-";
    tbody.children[3].children[1].innerHTML = obj.emailId ? obj.emailId : "-";
    tbody.children[4].children[1].innerHTML = obj.phoneNumber ? obj.phoneNumber : "-";
    tbody.children[5].children[1].innerHTML = obj.drink ? obj.streetAddress1 : "-";
    tbody.children[6].children[1].innerHTML = obj.drink ? obj.streetAddress2 : "-";
    tbody.children[7].children[1].innerHTML = obj.drink ? obj.city : "-";
    tbody.children[8].children[1].innerHTML = obj.drink ? obj.state : "-";
    tbody.children[9].children[1].innerHTML = obj.zipcode ? obj.zipcode : "-";
    tbody.children[10].children[1].innerHTML = obj.source ? obj.source : "-";
    tbody.children[11].children[1].innerHTML = obj.comments ? obj.comments : "-";
    tbody.children[12].children[1].innerHTML = obj.drink ? obj.drink : "-";

    if (obj.drinkValue) tbody.children[13].children[1].innerHTML = obj.drinkValue;
    else tbody.children[9].style.display = "none";
}