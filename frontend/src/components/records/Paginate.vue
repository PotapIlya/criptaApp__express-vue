<template>
    <nav v-if="id !== null"
         class="d-flex justify-content-center" aria-label="Page navigation example">
        <ul class="pagination">


            <li
                v-if="linksList.first !== null"
                class="page-item"
                @click="paginate(linksList.first.url)"
            >
<!--                <a class="page-link" href="#">{{ // linksList.first.label }}</a>-->
                <a class="page-link" href="#">first</a>
            </li>

            <li
                v-if="linksList.prev !== null"
                class="page-item"
                @click="paginate(linksList.prev.url)"
            >
                <a class="page-link" href="#">{{ linksList.prev.label }}</a>
            </li>

            <li class="page-item active"
                @click="paginate(linksList.current.url)"
            >
                <a class="page-link" href="#">{{ linksList.current.label }}</a>
            </li>

            <li
                v-if="linksList.next !== null"
                class="page-item"
                @click="paginate(linksList.next.url)"
            >
                <a class="page-link" href="#">{{ linksList.next.label }}</a>
            </li>

            <li
                v-if="linksList.last !== null"
                class="page-item"
                @click="paginate(linksList.last.url)"
            >
<!--                <a class="page-link" href="#">{{ // linksList.last.label }}</a>-->
                <a class="page-link" href="#">last</a>
            </li>


        </ul>
    </nav>
</template>

<script>
export default {
    name: "Paginate",
    props: ['arrayLinks'],
    data: () => ({
        id: null,

        linksList: {
            first: null,

            prev: null,
            current: null,
            next: null,

            last: null,
        },

    }),
    watch: {
        arrayLinks()
        {
            this.linksList = {
                first: null,

                prev: null,
                current: null,
                next: null,

                last: null,
            }

            this.arrayLinks.splice(0, 1)
            this.arrayLinks.splice(-1, 1)

            this.arrayLinks.forEach( item => {
               if (item.active){
                   this.id = Number(item.label) - 1
                   return true;
               }
                this.linksList.current = this.arrayLinks[this.id];
            })
            console.log(
                this.id
            )


            if (this.id === 0)
            {
                this.linksList.next = this.arrayLinks[this.id + 1];
                this.linksList.last = this.arrayLinks[ this.arrayLinks.length - 1 ];
            }
            else if (this.id === 1)
            {
                this.linksList.prev = this.arrayLinks[this.id - 1];
                this.linksList.next = this.arrayLinks[this.id + 1];
                this.linksList.last = this.arrayLinks[ this.arrayLinks.length - 1 ];

            }

            else if (this.id === this.arrayLinks.length - 2)
            {
                this.linksList.prev = this.arrayLinks[this.id - 1];
                this.linksList.next = this.arrayLinks[this.id + 1];
            }
            else if (this.id === this.arrayLinks.length - 1)
            {
                // this.linksList.prev = this.arrayLinks[this.id - 1];
            }
            else
            {
                this.linksList.first = this.arrayLinks[0];
                this.linksList.prev = this.arrayLinks[this.id - 1];
                this.linksList.next = this.arrayLinks[this.id + 1];
                this.linksList.last = this.arrayLinks[ this.arrayLinks.length - 1 ];
            }


            console.log(
                this.linksList[8]
            )

        }
    },
    methods:{
        paginate(url){
            this.$store.dispatch('records/ACTION_PAGINATE', url)
        }
    },
}
</script>

