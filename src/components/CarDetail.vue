<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="text-primary">{{car.Make}}</h2>
                <br/>
                <p>Model: <br/> <strong>{{car.Model}}</strong></p>
                <p>Year: <br/> <strong>{{car.Year}}</strong></p>
                <p>Participant: <br/> <strong>{{car.ParticipantFK}}</strong></p>
            </div>
        </div>

        <router-link v-if="auth" :to="`/cars/${this.$route.params.pk}/car`">
        <br/>
            <button type="button" class="btn btn-success">Add a Car</button>
        </router-link>
        <router-link v-else :to="`/signin`">
        <br/>
            <button type="button" class="btn btn-outline-success">Sign in to add a car</button>
        </router-link>
    </div>
</template>

<script>
export default {
    computed:{
        car(){
            var cars = this.$store.state.cars;
            var thisCar = cars.find((aCar)=> aCar.CarPK == this.$route.params.pk)
            return thisCar
        },
        auth(){return this.$store.state.token}
    }
}
</script>

<style scoped>



</style>