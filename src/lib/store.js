import { writable } from "svelte/store";

export const user = writable({
    id: "",
    username: "",
    email: "",
    api_key: ""
});