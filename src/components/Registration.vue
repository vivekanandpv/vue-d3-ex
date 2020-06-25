<template>
  <div>
    <h3>Registration Form</h3>
    <hr />
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>Phone number</label>
        <input type="text" class="form-control" />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Newsletter</label>
      </div>
      <div class="form-group">
        <label>Language</label>
        <select class="form-control">
          <option>English</option>
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
};
</script>
