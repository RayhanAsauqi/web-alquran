import { defineStore } from "pinia";
import axios from "axios";
import { IAlquranSurah } from "../../type/main";

export const useListAlquran = defineStore("alquran", {
  state: (): {
    data: IAlquranSurah[];
  } => ({
    data: [],
  }),
  getters: {

  },
  actions: {
    async fetchListAlquran(): Promise<void> {
      const response = await axios.get("https://equran.id/api/v2/surat");
      this.data = response.data.data;
    },
  },
});
