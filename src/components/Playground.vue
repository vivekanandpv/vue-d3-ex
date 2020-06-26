<template>
  <div>
    <h3>Playground: Users</h3>
    <table class="table table-striped" v-if="users.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      //  since the http client is configured for global injector,
      //  we can use it as part of every child
      const response = await this.$http.get(`users?page=2`);
      this.users = response.data.data;
    } catch (error) {
      alert('Oops! there was a problem!');
      console.log('Error', error);
    }
  },
};
</script>
