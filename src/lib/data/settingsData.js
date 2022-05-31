import { writable } from "svelte/store";
import { browser } from '$app/env';

import {settings, defaultSubscriptions} from "$lib/data/default.json";
import {Subscription} from "$lib/subscriptions.js";

let defaultBillingPlans = settings["billingPlans"];
let defaultCurrencies = settings["currencies"];
let defaultHowToDisplayCost = settings["howToDisplayCost"];
let defaultBillingPlansIncrement = settings["billingPlansIncrement"];
let settingsDefaultCurrency = settings["currency"];

// only use if it is client
const storedBillingPlans = (browser && 
    JSON.parse(localStorage.getItem("billingPlans"))) || defaultBillingPlans;

export const billingPlans = writable(storedBillingPlans);
billingPlans.subscribe(
    (value) => browser && (localStorage.billingPlans = JSON.stringify(value))
);

const storedBillingPlansIncrement = (browser && 
    JSON.parse(localStorage.getItem("billingPlansIncrement"))) || defaultBillingPlansIncrement;

export const billingPlansIncrement = writable(storedBillingPlansIncrement);
billingPlansIncrement.subscribe(
    (value) => browser && (localStorage.billingPlansIncrement = JSON.stringify(value))
);


const storedCurrencies = (browser && 
    JSON.parse(localStorage.getItem("currencies"))) || defaultCurrencies;

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

const storedHowToDisplayCost = (browser &&
    JSON.parse(localStorage.getItem("howToDisplayCost"))) || defaultHowToDisplayCost; // average, separate
export const howToDisplayCost = writable(storedHowToDisplayCost);
howToDisplayCost.subscribe(
    (value) => browser && (localStorage.howToDisplayCost = JSON.stringify(value))
);

const storedDefaultCurrency = (browser &&
    JSON.parse(localStorage.getItem("defaultCurrency"))) || settingsDefaultCurrency;
export const defaultCurrency = writable(storedDefaultCurrency);
defaultCurrency.subscribe(
    (value) => browser && (localStorage.defaultCurrency = JSON.stringify(value))
);