<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="12">
        <v-card width="400">
          <v-img
            height="15rem"
            src="https://i.blogs.es/545cf8/es6-logo/450_1000.png"
            class="mx-5"
          >
          </v-img>

          <v-card-text class="grey lighten-2">
            <div class="font-weight-bold ml-8 mb-2">JavaScript Avanzado</div>
            <div class="font-weight-bold ml-8 mb-2">Información</div>

            <v-timeline align-top dense>
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :color="message.color"
                small
              >
                <div>
                  <div class="font-weight-normal">
                    {{ message.cost }}<strong>{{ message.price }}</strong>
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    messages: [
      {
        cost: "Costo:",
        price: "30000",
        color: "deep-purple lighten-1",
      },
      {
        from: "John Doe",
        message: "Yeah, sure. Does 1:00pm work?",
        time: "10:37am",
        color: "green",
      },
      {
        from: "You",
        message: "Did you still want to grab lunch today?",
        time: "9:47am",
        color: "deep-purple lighten-1",
      },
    ],
  }),
};
</script>
