<template>
    <div class="signUp">
        <h3>Sign Up</h3>
        <input type="email" v-model="email" placeholder="Email"><br/>
        <input type="password" v-model="password" placeholder="Password"><br/>
        <button v-on:click="signUp">Sign Up</button>
        <p>Already have account? <router-link to="login">Login Here</router-link></p>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name : 'signUp',
        data : function() {
            return {
                email : '',
                password : ''
            }
        },
        methods : {
            signUp : function() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('helloworld');
                    },
                    (error) => {
                        alert('Error create new user ' + error.message);
                    }
                );
            }
        }
    }
</script>

<style scoped>
    .signUp {
        margin-top: 40px;
    }

    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }

    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer; 
    }

    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>