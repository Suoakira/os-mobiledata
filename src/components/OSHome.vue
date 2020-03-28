

<template>
  <div class="os-home">
    <h1>OS - download/upload speeds</h1>

    <OSFormSelectInput @update="handlemyCompanyChange" />

    <div class="os-container">
      <!-- mobile data download widget  -->
      <OSMobileDataWidget
        :filteredData="filterMobileData('download')"
        :myCompany="openSignal.myCompany"
      />

      <!-- mobile data upload widget  -->
      <OSMobileDataWidget
        :filteredData="filterMobileData('upload')"
        :myCompany="openSignal.myCompany"
      />
    </div>
  </div>
</template>

<script>
// import data
import Data from "../assets/data/mobileData.js";

// components
import OSMobileDataWidget from "./OSMobileDataWidget";
import OSFormSelectInput from "./OSFormSelectInput";

export default {
  data() {
    return {
      openSignal: {
        myCompany: "Verizon",

        // data

        filterRank: null
      }
    };
  },

  components: {
    OSMobileDataWidget,
    OSFormSelectInput
  },

  methods: {
    /**
     * @desc  Filters the array by type, download/upload. And sorts the data by rank highest to lowest speed (value). t28 Mar 2020
     * @author Stephen Courtier <steves0089@gmail>
     *
     * @param {String} - filtertypeStr
     * @returns {Array} - filtered array
     */
    filterMobileData(filtertypeStr) {
      // non destructive to original data
      return this.openSignal.mobileData
        .filter(data => data.type === filtertypeStr)
        .sort((a, b) => b.value - a.value);
    },

    /**
     * @desc listens for update evt on form input, and updates myCompany, 28 Mar 2020
     * @author Stephen Courtier <steves0089@gmail>
     *
     * @param {String} - company name
     */
    handlemyCompanyChange(evt) {
      this.openSignal.myCompany = evt;
    }
  },

  created() {
    // import data
    this.openSignal.mobileData = Data.mobileData;
  }
};
</script>


<style scoped>
.os-container {
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  grid-template-columns: 1fr 1fr;

  max-width: 1000px;
}
</style>