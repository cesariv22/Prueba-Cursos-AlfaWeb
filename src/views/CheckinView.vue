<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="mx-5">
          <h1>Registro de Usuario</h1>
        </div>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            class="mx-5"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :counter="10"
            :rules="passwordRules"
            type="password"
            label="Password"
            required
            class="mx-5"
          ></v-text-field>
          <v-row class="justify-center mt-5">
            <v-btn
              class="mx-3"
              :disabled="!valid"
              color="success"
              @click="register"
            >
              Registrar
            </v-btn>

            <v-btn class="mx-3" color="error" @click="reset">
              Limpiar Formulario
            </v-btn>

            <v-btn class="mx-3" color="warning" @click="resetValidation">
              Limpiar Validación
            </v-btn>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    password: "",
    passwordRules: [
      (v) => !!v || "Se requiere contraseña",
      (v) =>
        (v && v.length <= 10) || "El nombre debe tener menos de 10 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail es requerido",
      (v) => /.+@.+/.test(v) || "El email debe ser válido",
    ],
  }),

  methods: {
    register() {
      if (this.$refs.form.register()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
