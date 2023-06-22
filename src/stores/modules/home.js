import { getHomeHotSuggests } from "@/services/modules/order";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests:[]
    }),
    actions:{
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data
        }
    }
})

export default useHomeStore