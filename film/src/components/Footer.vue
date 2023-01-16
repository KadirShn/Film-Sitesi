<template>
    <v-footer dark padless>
        <v-card flat tile color="#440b59" class="white--text text-center">
            <v-card-text>
                <!-- <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                </v-btn>-->
                <v-btn class="mx-2" fab dark small color="#3b5998" :href="'https://facebook.com/'">
                    <v-icon dark>
                        fab fa-facebook-f
                    </v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark small color="#E1306C"
                    :href="'https://instagram.com/kadirshn78?igshid=MTg0ZDhmNDA='">
                    <v-icon dark>
                        fab fa-instagram
                    </v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark small color="#1DA1F2"
                    :href="'https://twitter.com/Kadirshn1_?t=oGiTnEfu3mL95Q6jM8ULqw&s=08'">
                    <v-icon dark>
                        fab fa-twitter
                    </v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark small color="#0072b1"
                    :href="'https://www.linkedin.com/in/kadir-%C5%9Fahin-a53828192/'">
                    <v-icon dark>
                        fab fa-linkedin
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                Vizyondaki filmleri, en yeni yabancı filmlerin fragmanlarını ve film bilgilerini sitemizden kolaylıkla
                ulaşabilirsiniz. Sosyal medya hesaplarımızdan bizi takip edip en yeni filmlerden haberdar olabilir veya
                öneri ve şikayetlerinizi bize bildirebilirsiniz.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} | <strong>©Telif Hakkı KEF Film tarafından sağlanmaktadır.</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({
            icons: [
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-facebook',
                'mdi-instagram'
            ]
        })
    }
</script>

<style>
</style>