<template>
    <div v-if="form.id !== null">
        <span v-if="form.name !== ''">
            Name: <input type="text" v-model="form.name">
        </span>

        <div v-if="frontImage !== null" class="col-3">
            <img class="mw-100" :src="require(`../../../../backend/public/storage/${frontImage}`)" alt="">
        </div>

        <input
            @change="uploadImage"
            type="file" class="form-control" id="inputGroupFile01">

        <button @click="deleteItem">
            delete
        </button>
        <button @click="updateItem">
            update
        </button>
    </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "geometricPatternsShow",
    computed:{
        ...mapGetters('geometricPatterns', ['GET_SHOW_ITEM']),
    },
    data: () => ({
        form:{
            id: null,
            name: '',
            image: null,
        },
        frontImage: null,
    }),
    watch:{
        GET_SHOW_ITEM(){
            this.checkShowItem();
        }
    },
    mounted() {
        this.$store.dispatch('geometricPatterns/ACTION_SHOW_SEND_AXIOS', this.$route.params.id).then( () =>
        {
            this.checkShowItem();
        })
    },
    methods:{
        checkShowItem(){
            if (this.GET_SHOW_ITEM === null){
                this.$router.push('../geometricPatterns')
            } else{
                this.form.id = this.GET_SHOW_ITEM.id;
                this.form.name = this.GET_SHOW_ITEM.name;
                this.frontImage = this.GET_SHOW_ITEM.image;
            }
        },
        uploadImage(event)
        {
            const file = event.target.files[0];

            this.form.image = file;
            // this.showPreloaderImage(file);
        },
        updateItem(){
            if (this.form.name !== '')
            {
                this.$store.dispatch('geometricPatterns/ACTION_UPDATE_SEND_AXIOS', this.form).then( (res) => {
                    this.form.name = res.name;
                    this.frontImage = res.image;
                })
            }
        },
        deleteItem(){
            this.$store.dispatch('geometricPatterns/ACTION_DELETE_SEND_AXIOS', this.form).then( () => {

            })
        },
    }
}
</script>

