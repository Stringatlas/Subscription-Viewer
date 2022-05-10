import { writable } from "svelte/store";
import { browser } from '$app/env';

import {settings} from "$lib/data/default.json";


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