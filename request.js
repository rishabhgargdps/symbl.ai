//Method 1: Using XttpRequest web browser object (Node js implementation: Xhr2)
const request = new XMLHttpRequest();
request.open('GET', 'https://www.example.com/get-data');
request.send();
request.onload = () => {
    if (request.status === 200) {
        var data = JSON.parse(request.response).data;
        data.sort(function(a, b) {
            return a.id - b.id;
        })
        data.forEach((item, index) => {
            console.log(item.id);
            console.log(item.name)
        })
    } else {
        console.log(`error ${request.status}`);
    }
}