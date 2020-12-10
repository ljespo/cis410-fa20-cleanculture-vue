<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3>{{firstName}}'s Cars </h3>
        <p v-if="accountError" class="form-text text-danger">Can not get your account information, please try again later.</p>
        <table v-if="carsByUser" class="table">
            <thead>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
            </thead>
            <tbody>
                <tr v-for="thisCar in carsByUser" :key="thisCar.CarPK">
                    <th><router-link :to="'/cars/${thisCar.CarFK}'">{{thisCar.Make}}</router-link></th>
                    <th>{{thisCar.Model}}</th>
                    <th>{{thisCar.Year}}</th>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            carsByUser: null,
            accountError: false
        }
    },
    computed:{
        firstName(){
            return this.$store.state.user.nameFirst
        }
    },
    created(){
        axios.get("/car/me", {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            } 
    }).then((response)=>{
        console.log("here is the response", response)
        this.carsByUser = response.data
    })
    .catch(()=>{
        this.accountError = true
    })
}
}
</script>

<style scoped>



</style>