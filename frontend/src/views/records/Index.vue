<template>
    <div>
        <h1>Записи</h1>
        <router-link to="/records/create">
            Add
        </router-link>

        <table
            v-if="arrayItems"
            class="table table-hover"
        >
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>

                <tr
                    v-for="(items, index) in arrayItems"
                    :key="index"
                >
                    <hr color="red">

                    <div v-for="item in items">
                        <hr color="#000">
                        <div v-for="x in item">
                            {{ x.month }} -
                            {{ x.day }}
                        </div>
                    </div>
<!--                    <th scope="row">{{ item.id }}</th>-->
<!--                    <td> {{ item.title }}</td>-->
<!--                    <td>Otto</td>-->
<!--                    <td>-->
<!--                        <router-link :to=" '/records/'+item.id ">-->
<!--                           Перейти-->
<!--                        </router-link>-->
<!--                    </td>-->
                </tr>

            </tbody>
        </table>


        <nav v-if="arrayLinks.length"
             class="d-flex justify-content-center" aria-label="Page navigation example">
            <ul class="pagination">


                <li
                    v-for="item in arrayLinks"
                    :class="{ 'active' : item.active }"
                    class="page-item"
                    @click="paginate(item.url)"
                >
                    <!--                <a class="page-link" href="#">{{ // linksList.first.label }}</a>-->
                    <a class="page-link" href="#">{{ item.label }}</a>
                </li>


            </ul>
        </nav>
<!--        <Paginate-->
<!--            :arrayLinks="arrayLinks"-->
<!--        />-->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Paginate from "@/components/records/Paginate";
export default {
    name: "RecordsIndex",
    components: { Paginate },
    data: () => ({
        arrayItems: [],
        arrayLinks: [],

    }),
    computed:{
        ...mapGetters('records', ['GET_ARRAY_ITEMS', 'GET_arrayItemsStatus', 'GET_ARRAY_LINKS'])
    },
    watch: {
        GET_ARRAY_ITEMS(){
           this.updateDataFromVuex();
        },
        arrayItems()
        {
            console.log(
                this.arrayItems
            )
        }
    },
    methods:{
        updateDataFromVuex(){
            this.arrayItems = this.GET_ARRAY_ITEMS;
            this.arrayLinks = this.GET_ARRAY_LINKS;
        },
        paginate(url){
            this.$store.dispatch('records/ACTION_PAGINATE', url)
        }
    },
    mounted()
    {
        if ( this.GET_arrayItemsStatus ){
            this.$store.dispatch('records/ACTION_GET_SEND_AXIOS').then( () => {
                this.updateDataFromVuex();
            })
        } else {
            this.updateDataFromVuex();
        }
    }
}
</script>

