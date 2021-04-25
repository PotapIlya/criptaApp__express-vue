<template>
    <div>
        <h1>Записи</h1>
        <router-link to="/records/create">
            Add
        </router-link>

        <div
            v-if="arrayItems"
            class="table table-hover"
        >

            <div class="d-flex align-items-center justify-content-between">
                <span class="col">#</span>
                <span class="col">UTC</span>
                <span class="col">PnL</span>
                <span class="col">Symbol</span>
                <span class="col">L/S</span>
                <span class="col">PnL%</span>
            </div>

            <div>

                <div
                    v-for="(arrayItems, index) in arrayItems"
                    :key="index"
                    class="d-flex flex-column"
                >
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="col">
                            #
                        </div>
                        <div class="col">
                            <button>00 - {{ index }} - 2021</button>
                        </div>
                        <div class="col">PnL</div>
                        <div class="col" >Symbol</div>
                        <div class="col">L/S</div>
                        <div class="col">PnL%</div>
                    </div>

                    <div v-for="items in arrayItems">

                        <div v-for="item in items">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="col">
                                    #
                                </div>
                                <div class="col">
                                    {{item.day}} - {{item.month}} - {{item.year}}
                                </div>
                                <div class="col">{{ item.profit }}%</div>
                                <div class="col" >Symbol</div>
                                <div class="col">L/S</div>
                                <div class="col">PnL%</div>
                            </div>
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
                </div>

            </div>
        </div>


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

