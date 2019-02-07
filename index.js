"use strict";

const fetch   = require ("node-fetch");
const url     = "http://localhost:3000/transactions";
let status    = "None";
const data    = require ("./data.json");

console.log(data);


function post () {
    fetch(url, {
        method : "post",
        body   : JSON.stringify(data),
        headers: {"Content-Type": "application/json"},
    })

        .then (res => res.json())
        .then (json => console.log(json))
        .catch (err => console.log(err));
}

fetch(url)
    .then(res => {
        status = res.status;
        console.log("Status 2", status, res.statusText);
        return res.json();
    })
    .then(res => console.log(res))
    .catch (err => console.log(err));

setInterval(post, 10000);