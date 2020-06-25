<template>
  <div>
    <h3>Registration Form</h3>
    <hr />
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="form.name" />
      </div>
      <div class="form-group">
        <label>Phone number</label>
        <input type="text" class="form-control" v-model="form.phone" />
      </div>
      <div class="form-group form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          v-model="form.newsletter"
        />
        <label class="form-check-label" for="exampleCheck1">Newsletter</label>
      </div>
      <div class="form-group">
        <label>Language</label>
        <select class="form-control" v-model="form.language">
          <option value="">---Please Select---</option>
          <option
            v-for="(lang, index) in languages"
            v-bind:key="index"
            :value="lang"
            >{{ lang }}</option
          >
        </select>
      </div>
      <button class="btn btn-primary mt-4">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        newsletter: false,
        language: '',
      },
      languages: ['English', 'Hindi', 'French', 'Russian', 'German'],
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        name: this.form.name,
        phone: this.form.phone,
        newsletter: this.form.newsletter,
        language: this.form.language,
      };
      console.log('Form', formData);
    },
  },
};
</script>
