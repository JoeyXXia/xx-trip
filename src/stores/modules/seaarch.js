import { getSearchTop, getSearchResult } from "@/services/modules/search"
import { defineStore } from "pinia"

const useSearchStore = defineStore("search", {
  state: () => ({
    searchTop: [],
    searchResult: [],
  }),
  actions: {
    async fetchSearchTopData() {
      const res = await getSearchTop()
      this.searchTop = res.data.data
    },
    async fetchSearchResultData() {
      const res = await getSearchResult()
      this.searchResult = res.data.data
    },
  },
})

export default useSearchStore
