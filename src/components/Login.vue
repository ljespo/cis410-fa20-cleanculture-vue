<template>
    <div>
        <h1>Login</h1>
        <div v-if="this.$route.query.signupsuccess" class="alert alert-success">Thanks for siging up, please log in now.</div>

           <form @submit.prevent="onSubmit">
                <div class="form-group"><label for="exampleInputEmail1">Email address</label> 
                    <input type="email" id="exampleInputEmail1" required="required" placeholder="Enter email" class="form-control" v-model="email">
                </div> 

                <div class="form-group"><label for="exampleInputPassword1">Password</label> 
                    <input type="password" id="exampleInputPassword1" placeholder="Password" required="required" class="form-control" v-model="password">
                </div> 

                <button type="submit" class="btn btn-primary">Submit</button> 

                <p v-if="credentialsError" class="form-text text-danger">Invalid credentials</p>

                <p v-if="loginError" class="form-text text-danger">Could not log you in, please try again later.</p>

            </form>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return {
            email: '',
            password: '',
            loginError: false,
            credentialsError: false
        }
    },
    methods:{
        onSubmit(){
            const myFormData={
                email: this.email,
                password: this.password
            };
            
            axios.post("/participants/login", myFormData)
                .then(myResponse=>{

                    this.$store.commit("storeTokenInApp", myResponse.data.token);
                    this.$store.commit("storeUserInApp", myResponse.data.user);
                    this.$router.replace("/account")
                })
                .catch((myError)=>{
                    console.log("myError", myError.response)

                    if(myError.response.data == 'Invalid user credentials'){
                        this.credentialsError = true 
                    }else{this.loginError = true}
            })
        }
    }
}
</script>

<style scoped>



</style>