import { writable } from "svelte/store";
import { browser } from '$app/env';

import {settings, defaultSubscriptions} from "$lib/data/default.json";
import {Subscription} from "$lib/subscriptions.js";

console.log(defaultSubscriptions);
// only use if it is client
const storedBillingPlans = (browser && 
    JSON.parse(localStorage.getItem("billingPlans"))) || settings["billingPlans"];

export const billingPlans = writable(storedBillingPlans);
billingPlans.subscribe(
    (value) => browser && (localStorage.billingPlans = JSON.stringify(value))
);


const storedCurrencies = (browser && 
    JSON.parse(localStorage.getItem("currencies"))) || settings["currencies"];

export const currencies = writable(storedCurrencies);
currencies.subscribe(
    (value) => browser && (localStorage.currencies = JSON.stringify(value))
);


const storedSubscriptions = (browser && 
    JSON.parse(localStorage.getItem("subscriptions"))) || defaultSubscriptions;

export const subscriptions = writable(storedSubscriptions);
subscriptions.subscribe(
    (value) => browser && (localStorage.subscriptions = JSON.stringify(value))
);

