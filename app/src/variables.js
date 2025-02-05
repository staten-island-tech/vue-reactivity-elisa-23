import { ref, reactive } from 'vue';


let selected = ref("");
let selectedObj = reactive({ img: null, description: "", name: "", id: "", price: null });

let cart = reactive({ items: [] });

export { selected, selectedObj, cart }