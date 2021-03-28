<template>
    <div>

        <label style="display: flex" for="">
            <span>Name:</span>
            <input type="text" v-model="form.input">
        </label>

        <input
            @change="uploadImage"
            type="file" class="form-control" id="inputGroupFile01">

        <button @click="send">Send</button>

    </div>
</template>

<script>
export default {
    name: "geometricPatternsCreate",
    data: () => ({
        form: {
            input: '',
            image: null,
        },

        dataPreloadImage: null,
    }),
    methods:{
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
            if ( this.name !== '' )
            {
                this.$store.dispatch('geometricPatterns/ACTION_CREATE_SEND_AXIOS', this.form).then( () => {
                    this.input = '';
                })
            }
        }
    }
}
</script>
