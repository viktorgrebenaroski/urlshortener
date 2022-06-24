<template>
  <div class="d-flex align-items-center min-vh-100">
  <div class="container text-center col-md-5">
  <b-alert v-bind:variant="typeAlert" v-bind:show="showAlert">{{alertText}}</b-alert>
  <b-form @submit="submitForm">
   <b-input-group size="lg">
    <b-form-input v-model="url" placeholder="URL.." class="text-center"></b-form-input>
    <b-input-group-append>
      <b-button variant="info" type="submit">Shorten URL</b-button>
    </b-input-group-append>
  </b-input-group>
  </b-form>
  <br>
  <b-input-group size="sm" v-show="showResult">
    <b-input size="sm" v-model="urlResult" class="text-center" disabled></b-input>
    <b-input-group-append>
      <b-button variant="dark" v-clipboard:copy="urlResult" v-clipboard:success="onCopy">
        <b-icon icon="clipboard" aria-hidden="true"></b-icon>
      </b-button>
    </b-input-group-append>
  </b-input-group>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UrlShortenerForm',
  data() {
    return {
      url: '',
      urlResult: 'N/A',
      showResult: false,
      showAlert: false,
      alertText: '',
      typeAlert: 'success',
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      if (this.url !== '') {
        axios
          .post('/v1/url/create', {
            url: this.url,
          })
          .then((res) => {
            this.urlResult = res.data.url;
            this.url = '';
            this.showResult = true;
          });
      }
    },
    onCopy() {
      this.showAlertInfo('URL Link is copied!', 'success');
    },
    showAlertInfo(info, type) {
      this.alertText = info;
      this.showAlert = 5;
      this.typeAlert = type;
    },
  },
};
</script>
