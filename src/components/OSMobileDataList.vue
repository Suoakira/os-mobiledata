<template>

    <h5>

        {{ data.rank }}. {{ data.company }} {{ data.value }}Mbps

    </h5>
    
</template>

<script>
export default {


    props: {
        data: {
            type: Object, 

            // fallback no data present
            default: {
                rank: "...",
                company: "...",
                value: "..."
            }
        }
    }
    
}
</script>

<style scoped>

    h5 {
        margin: 2% 0;
    }

</style>