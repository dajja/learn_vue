<template>
    <div class="user-detail">
        <div class="user-detail-container" v-if="Object.keys(userDetail).length !== 0">
            <div class="user-name">
                Name: {{ userDetail.name }}
            </div>
            <div class="user-email">
                Email: {{ userDetail.email }}
            </div>
            <div class="user-dob">
                Phone: {{ userDetail.phone }}
            </div>
            <div class="user-gender">
                Company: {{ userDetail.company.name }}
            </div>
            <div class="user-address">
                Address: {{ userDetail.address.street }} - {{ userDetail.address.suite }} - {{ userDetail.address.city }}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Detail",
        props: ['userDetail'],
        setup(props) {
            console.log(props.userDetail); 
            return {
                
            }
        }
    }
</script>
<style scoped>
</style>
