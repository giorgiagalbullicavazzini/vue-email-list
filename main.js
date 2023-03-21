const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            // Number of emails to generate
            times: 10,
            // Emails array
            emails: [],
        }
    },
    beforeMount() {
        // Recalling an API to get the correct number of random emails
        for (let i = 1; i <= this.times; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                const email = response.data.response;
                this.emails.push(email);
            })
        }
    }
}).mount('#app');