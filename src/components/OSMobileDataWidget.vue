<template>


    <div 
		v-if="filteredData.length > 0"
		:class="`os-card ${widgetBackground}`">

        <h1>{{ capitaliseFirstLetter(filteredData[0].type) }}</h1>

		<hr />

		<ul>

			<li v-for="(data, index) in filteredData" :key="index" >
				
				<OSMobileDataList :data="data" />

			</li>

		</ul>

    </div>

</template>

<script>
import OSMobileDataList from "./OSMobileDataList"
import utilsMix from "../mixins/utils.js"

export default {

    components: {
        OSMobileDataList
	},
	
	mixins: [ utilsMix ],

    props: {

        filteredData: {

			type: Array,
			default: []

		},
		
		myCompany: {
			type: String,
			default: ''
		}

    },

    computed: {
        widgetBackground() {

			const myCompanyData = this.filteredData.find(data => data.company === this.myCompany)
			
			if (myCompanyData.rank === 1) {

				return "green"
			} else if (myCompanyData.rank === 2) {

				return "yellow"
			}  else if (myCompanyData.rank === 3) {

				return "red"
			} else {
				// company not found
				return "grey"
			}

		}
    }
    
}
</script>

<style scoped>

	ul {
		list-style: none;
		text-align: left;

	}

	hr {
		margin: 0;
		border-color: rgba(255,255,255, 0.2);
	}

	h1 {
		margin: 5% 0;
	}

	.os-card {
		position: relative;
		display: inline-block;
		margin: 5%;
		border-radius: 4px;

		padding-bottom: 10%;
		max-width: 380px;

		left: 50%;
		transform: translateX(-50%);
	}

	.os-card.os-card.green {
		background: #28A745;
		color: white
	}

	.os-card.os-card.yellow {
		background: #FFC108;
	}

	.os-card.os-card.red {
		background: #D95350;
		color: white
	}

	.os-card.os-card.grey {
		background: red;
		color: white
	}

</style>