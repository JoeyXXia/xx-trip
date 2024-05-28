import { getSearchTop, getSearchResult } from "@/services/modules/search"
import { defineStore } from "pinia"

const useHomeStore = defineStore("search", {
  state: () => ({
    searchTop: [],
    searchResult: [],
  }),
  actions: {
    async fetchSearchTopData() {
      const res = await getSearchTop()
      this.searchTop = res.data
    },
    async fetchSearchResultData() {
      const res = await getSearchResult()
      this.searchResult = res.data
    },
  },
})

export default useHomeStore
