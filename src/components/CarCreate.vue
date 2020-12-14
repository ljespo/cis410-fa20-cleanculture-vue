<template>
     <div class="row justify-content-center">
         <div class="col-lg-10">
             <div class="card">
                 <div class="card-body">
                     <h4>Create a new car</h4> 
                     <form id="car-form" @submit.prevent="submitCar">
                        <div class="form-group">
                            <label for="yearinput">Year</label> <textarea row="3" id="yearinput" name="year" required="required" class="form-control" v-model="year"></textarea>
                        </div> 
                        <div class="form-group">
                            <label for="makeinput">Make</label> <textarea row="3" id="makeinput" name="make" required="required" class="form-control" v-model="make"></textarea>
                        </div> 
                        <div class="form-group">
                            <label for="modelinput">Model</label> <textarea row="3" id="modelinput" name="model" required="required" class="form-control" v-model="model"></textarea>
                        </div> 
                        
                        
                        <button type="submit" class="btn btn-primary">Submit Car</button> 
                        
                        <button v-on:click="cancelCar" type="clear" class="btn btn-outline-danger">Cancel</button>

                        <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
                    </form>
                </div>
        </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            year: "",
            make: "",
            model: "",
            errorMessage: null,
        }
    },
    methods:{
        submitCar(){
            const myCar={
                year: this.year,
                make: this.make,
                model: this.model,
            };
            // console.log("here is the car", myCar)
            const token = this.$store.state.token;
            axios.post("/car", myCar, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(()=>{this.$router.replace('/account')})
            .catch(()=>{this.errorMessage = "Unable to create new car, please try again later."})
        },
        cancelCar(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>



</style>