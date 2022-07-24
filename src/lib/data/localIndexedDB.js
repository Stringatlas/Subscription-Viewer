import { browser } from "$app/env";

let imagePath = "/logo.png"


function main() {
    const request = indexedDB.open("images");

    request.onupgradeneeded = function (event) {
        console.log("db updated");
    }

    request.onsuccess = function (event) {
        console.log("accessed db");
    }

    request.onerror = function (event) {
        console.log("error accessing db");
    }
}

if (browser) {
    main();
}
