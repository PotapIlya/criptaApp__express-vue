<template>
    <div>
        <h1>Паттерны</h1>
        <router-link to="/geometricPatterns/create">
            Add
        </router-link>


        <table
            v-if="arrayItems.length"
            class="table table-hover"
        >
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>

            <tr
                v-for="item in arrayItems"
                :key="item.id"
            >
                <td> {{ item.id }}</td>
                <td> {{ item.name }}</td>
                <td>
                    <router-link class="btn btn-info" :to="'/geometricPatterns/'+item.id ">
                        Show
                    </router-link>
                </td>
            </tr>

            </tbody>
        </table>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "geometricPatternsIndex",
    data: () => ({
        input: '',
        arrayItems: [],
    }),
    computed: {
        ...mapGetters('geometricPatterns', ['GET_ARRAY_ITEMS', 'GET_arrayItemsStatus']),

        ...mapActions('geometricPatterns', ['ACTION_GET_SEND_AXIOS'])
    },
    methods:{

    },
    created()
    {
        if ( this.GET_arrayItemsStatus ){
            this.$store.dispatch('geometricPatterns/ACTION_GET_SEND_AXIOS').then( () => {
                this.arrayItems = this.GET_ARRAY_ITEMS
            })
        } else{
            this.arrayItems = this.GET_ARRAY_ITEMS
        }
    },
}
</script>
