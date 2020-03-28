<template>
  <select v-model="selectedCompany">
    <option disabled value>Please select one</option>

    <option>AT&T</option>
    <option>T-Mobile</option>
    <option>Verizon</option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selectedCompany: "Verizon"
    };
  },

  watch: {
    /**
     * @desc emits event to parent that updates selected myCompany, 28 Mar 2020
     * @author Stephen Courtier <steves0089@gmail>
     */
    selectedCompany() {
      this.$emit("update", this.selectedCompany);
    }
  },

  created() {
    // update selected company when the component is first mounted
    this.$emit("update", this.selectedCompany);
  }
};
</script>