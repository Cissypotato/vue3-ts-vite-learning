<template>

    <div>
        <div class="content">
            <div>{{ data.name }}</div>
            <div><img src="" alt=""></div>
            <div></div>
            <div></div>
        </div>
        
    </div>
    
    </template>
    
    <script setup lang='ts'>
    import { axios } from '../server/axios';
    import { ref,reactive} from 'vue'

    interface Data{
        data:{
            name:string,
            age:number,
            gender:string,
            des:string,
            url:string
        }
    }

    const {data}=await axios.get<Data>('/data.json')
    
    </script>
    <style scoped>
    
    </style>