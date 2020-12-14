<template>
    <div>
        <h1>Cars</h1>
        <hr/>

        <table class="table">
            <thead>
                <tr>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisCar in cars" :key="thisCar.CarPK">
                    <th>{{thisCar.Make}}</th>
                    <td>{{thisCar.Model}}</td>
                    <td>{{thisCar.Year}}</td>
                    <td>
                        <router-link :to="`/cars/${thisCar.CarPK}`">
                            <button type="button" class="btn btn-primary">Details</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    computed:{
        cars(){return this.$store.state.cars}
    }
}
</script>

<style scoped>



</style>