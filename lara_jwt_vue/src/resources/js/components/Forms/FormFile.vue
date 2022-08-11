<template>
<form name="fileSend">
    <input type="file">
    <input type="button" @click="send">
</form>
</template>

<script>
export default {
    name: "FormFile",

    setup: () => ({
        send: function () {
            let data = new FormData()
            let imageFile = document.getElementById('imageFile');
            let input = document.querySelector('input[type="file"]')
            data.append("image", input.files[0]);
            console.log('Send')
            console.log(data)
            fetch('/api/file', {
                    method: 'POST',
                    headers: {
                        // 'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                        // 'Content-Type': 'multipart/form-data',
                    },
                    body: data
                }
            )
                .then(res=> {
                    console.log(res)
                    return res.json()
                })
                .then(txt => {
                    console.log(txt)
                })
                .catch(err => {
                    console.log('Error')
                    console.log(err)
                })
        }
    })
}
</script>

<style scoped>

</style>
