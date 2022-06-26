<script>
export default {
  name: 'Redirect',
  beforeCreate() {
    return fetch(`/api/v1/url/${this.$route.params.url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
      .then((data) => { window.location.href = data.url; });
  },
};
</script>
