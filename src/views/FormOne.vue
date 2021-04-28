<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fuid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step" id="visibility">
                <v-window-item :value="1" transition="slide-x-transition">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">ログイン</h1>
                          <div class="text-center" mt-4>
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon>mdi-facebook</v-icon>
                            </v-btn>
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon>mdi-google</v-icon>
                            </v-btn>
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon>mdi-twitter</v-icon>
                            </v-btn>
                          </div>
                          <h4 class="text-center mt-4">メールアドレスとパスワードを入力してスタートしましょう。</h4>
                          <v-form>
                            <v-text-field
                            label="Eメールアドレス"
                            name="email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="teal accent-3"
                            >
                            </v-text-field>
                            <v-text-field
                            id="password"
                            label="パスワード"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="teal accent-3"
                            >
                            </v-text-field>
                          </v-form>
                          <h3 class="text-center mt-3">パスワードをお忘れですか？</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="teal accent-3" dark>ログイン</v-btn>
                      </div>
                    </v-col>
                    <v-col cals="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">こんにちは！</h1>
                        <h5 class="text-center">登録がまだの方はこちら</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">新規会員登録</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              <v-window-item
              :value="2"
               transition="slide-x-transition"
              >
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="teal accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">おかえりなさい！</h1>
                    <h5 class="text-center">登録済の方はこちら</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step--">ログイン</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 teal--text text--accent-3">新規登録はこちら</h1>
                    <div class="text-center mt-4">
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-google</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon>mdi-twitter</v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center mt-4">お名前、メールアドレス、パスワードを入力してスタートしましょう。</h4>
                    <v-form>
                      <v-text-field
                      label="お名前"
                      name="name"
                      prepend-icon="mdi-human"
                      type="text"
                      color="teal accent-3"
                      >
                      </v-text-field>
                      <v-text-field
                      label="Eメールアドレス"
                      name="email"
                      prepend-icon="mdi-email"
                      type="text"
                      color="teal accent-3"
                      >
                      </v-text-field>
                      <v-text-field
                      id="password"
                      label="パスワード"
                      prepend-icon="mdi-lock"
                      type="password"
                      color="teal accent-3"
                      >
                      </v-text-field>
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-n5">
                    <v-btn rounded color="teal accent-3" dark>無料で登録する</v-btn>
                  </div>
                </v-col>
              </v-row>
              </v-window-item>

              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SignIn from '@/components/FormOne/SignIn.vue'

export default {
  data() {
    return {
      step: 2
    }
  },
  props: {
    source: String
  }
}
</script>

<style lang="sass">
 #visibility
   transition: all 10s
</style>