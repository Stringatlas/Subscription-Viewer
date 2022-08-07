import { browser } from "$app/env";

const dbName = "images";
const storeName = "imagesStore";
const dbVersion = 1;

var imagesDB;
var imagesStore;

export function AccessDB(version) {
    const request = indexedDB.open(dbName, version);
    
    request.onupgradeneeded = function (event) {
        imagesDB = event.target.result;

        if (!imagesDB.objectStoreNames.contains(storeName)) {
            imagesStore = imagesDB.createObjectStore(storeName, {
                keyPath: "id"
            });
        }

        console.log("DB Updated from " + event.oldVersion + " to " + 
        event.newVersion || imagesDB.version, imagesDB);
    }

    request.onsuccess = function (event) {
        imagesDB = event.target.result;
        console.log("Accessed DB", imagesDB);
    }

    request.onerror = function (event) {
        console.log("Error Accessing DB");
        console.error(`Database error: ${event.target.errorCode}`);
        alert("Cannot store images because unable to access IndexedDB");
    }
}

export function storeImage(id, imageString) {
    if (imagesDB == null) {
        AccessDB(dbVersion);
    }

    var image = {
        "id": id,
        "image": imageString,
    }

    const transaction = imagesDB.transaction(storeName, "readwrite");
    transaction.oncomplete = (event) => {
        console.log(event);
    }

    transaction.onerror = (error) => {
        console.log(error);
    }

    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.add(image);

    request.onsuccess = (event) => {
        console.log("adding picture");
    }

    request.onerror = (error) => {
        console.log("failed to store");
    }
}

export function DeleteDB() {
    const request = indexedDB.deleteDatabase(dbName);

    request.onerror = function(event) {
        console.log("Error deleting database.");
    };
      
    request.onsuccess = function(event) {
        console.log("Database deleted successfully");
    };
}

export function getImage(id, objectForStoring) {
    if (imagesDB == null) {
        AccessDB(dbVersion);
    }

    const transaction = imagesDB.transaction(storeName, "readonly");

    transaction.oncomplete = (event) => {
        console.log(event);
    }

    transaction.onerror = (error) => {
        console.log(error);
    }

    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.get(id);

    request.onsuccess = (event) => {
        console.log("SUCCESSS", request)
        objectForStoring.value.push(request.result.image);
    }

    request.onerror = (error) => {
        console.log("failed to get at id: " + id);
        return null
    }

    return request;

}
export function getAllImages(ids) {
    if (imagesDB == null) {
        AccessDB(dbVersion);
    }
    
    let images = {};

    const transaction = imagesDB.transaction(storeName, "readonly");

    transaction.oncomplete = (event) => {
        console.log("transacition event", event);
    }

    transaction.onerror = (error) => {
        console.log(error);
    }

    const objectStore = transaction.objectStore(storeName);

    for (let i = 0; i < ids.length; i++) {
        let id = ids[i]

        const request = objectStore.get(id);

        request.onsuccess = (event) => {
            console.log("SUCCESSS", request)
            images[id] = (request.result.image);
            console.log(JSON.stringify(images));
        }
    
        request.onerror = (error) => {
            console.log("failed to get at id: " + id);
            images[id] = null;
        }
    }
    
    return images;

}
if (browser) {
    AccessDB(dbVersion);
}
