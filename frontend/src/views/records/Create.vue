<template>

    <div class="mb-5 pb-5 d-flex justify-content-between">

        <div class="col-4">
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupFile01">Картинка</label>
                <input
                    @change="uploadImage"
                    type="file" class="form-control" id="inputGroupFile01">
            </div>

            <div v-if="dataPreloadImage">
                <div>
                    <img class="w-100" :src="dataPreloadImage" alt="">
                </div>
                <button @click="deleteDataPreloadImage" class="btn btn-danger w-100">Очистить</button>

            </div>
        </div>

        <div class="row g-3">

            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Заголовок</label>
                <input v-model="form.title" type="text" class="form-control" id="inputEmail4">
            </div>


            <div v-if="arrayCurrencyPairs.length" class="input-group col-md-6">
                <select v-model="form.currencyPairs"
                        class="form-select flex-grow-1" id="inputGroupSelect01">
                    <option v-for="item in arrayCurrencyPairs" :key="item.id" :value="item.id">
                        {{ item.name }}
                    </option>
                </select>
                <label class="input-group-text" for="inputGroupSelect01">
                    Валютная пара
                </label>
            </div>

            <div class="input-group col-12 my-3 h-50">
                <span class="input-group-text">Описание</span>
                <textarea v-model="form.description" class="form-control h-100" aria-label="With textarea"></textarea>
            </div>


            <div class="col-md-6">
                <div class="input-group col-12 px-0 mb-3">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">Цена входа</span>
                    <input type="number"  v-model="form.price_start" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                </div>
                <div class="input-group col-12 px-0">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">Цена выхода</span>
                    <input type="number"  v-model="form.price_end" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                </div>
            </div>


            <div class="col-md-6">
                <div class="input-group col-12 px-0 mb-3">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">Кол-во</span>
                    <input type="number"  v-model="form.count" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                </div>
                <div class="input-group col-12 px-0">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">Профит (%)</span>
                    <input type="number"  v-model="form.profit" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                </div>
            </div>


            <div class="col-md-12 ml-4 mt-2">
                <div class="form-check col-12 px-0">
                    <input v-model="form.side" value="true" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                        &uarr;
                    </label>
                </div>
                <div class="form-check col-12 px-0">
                    <input v-model="form.side" value="false" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                        &darr;
                    </label>
                </div>
            </div>


            <div class="col-12 mt-3 d-block">
                <button @click="send" type="submit" class="btn btn-primary">Создать</button>
            </div>
        </div>
    </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "RecordsCreate",
    data: () => ({
       // FORM
        form: {
            currencyPairs: null,
            title: '',
            description: '',
            image: null,
            price_start: null,
            price_end: null,
            count: null,
            profit: null,
            side: false,
        },
        // END FORM

        arrayCurrencyPairs: [],
        dataPreloadImage: null,

    }),
    computed: {
        ...mapGetters('currencyPairs', ['GET_ARRAY_ITEMS', 'GET_arrayItemsStatus']),

        ...mapActions('currencyPairs', ['ACTION_GET_SEND_AXIOS'])
    },
    mounted()
    {
        if ( this.GET_arrayItemsStatus )
        {
           this.$store.dispatch('currencyPairs/ACTION_GET_SEND_AXIOS').then( () =>
           {
               this.arrayCurrencyPairs = this.GET_ARRAY_ITEMS;
               this.form.currencyPairs = this.GET_ARRAY_ITEMS[0].id
           })
        } else{
            this.arrayCurrencyPairs = this.GET_ARRAY_ITEMS;
            this.form.currencyPairs = this.GET_ARRAY_ITEMS[0].id
        }
    },

    methods:{
        deleteDataPreloadImage(){
            this.form.image = null;
            this.dataPreloadImage = null;
        },
        showPreloaderImage(file)
        {
            if (file)
            {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.dataPreloadImage = e.target.result;
                }
                reader.readAsDataURL(file)
            }
        },
        uploadImage(event)
        {
            const file = event.target.files[0];

            this.form.image = file;
            this.showPreloaderImage(file);

        },
        send()
        {
            this.$store.dispatch('records/ACTION_CREATE_SEND_AXIOS', this.form)
        }

    }
}
</script>

