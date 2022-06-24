<script>
import axios from 'axios';

export default {
  name: 'Redirect',
  beforeCreate() {
    return axios
      .get(`/v1/url/${this.$route.params.url}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      .then((res) => {
        window.location.href = res.data.url;
      });
  },
};
</script>
