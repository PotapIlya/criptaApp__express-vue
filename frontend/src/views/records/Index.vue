<template>
    <div>
        <h1>Записи</h1>
        <router-link to="/records/create">
            Add
        </router-link>

        <table
            v-if="GET_ARRAY_ITEMS.length"
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
                    v-for="item in GET_ARRAY_ITEMS"
                    :key="item.id"
                >
                    <th scope="row">{{ item.id }}</th>
                    <td> {{ item.title }}</td>
                    <td>Otto</td>
                    <td>
                        <router-link :to=" '/records/'+item.id ">
                           Перейти
                        </router-link>
                    </td>
                </tr>

            </tbody>
        </table>

        <nav class="d-flex justify-content-center" aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "RecordsIndex",
    data: () => ({

    }),
    computed:{
        ...mapGetters('records', ['GET_ARRAY_ITEMS'])
    },
    created() {
        if ( this.GET_ARRAY_ITEMS.length === 0 ){
            this.$store.dispatch('records/ACTION_GET_SEND_AXIOS')
        }
    }
}
</script>

