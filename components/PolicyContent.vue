<template>
  <Loader v-if="fetchStatus.pending" />
  <div v-else class="w-full policy-content" v-html="policyContent" />
</template>

<script>
import { marked } from "marked";

export default {
  computed: {
    policyContent() {
      if (this.data) {
        return marked(this.data.data.attributes.content);
      }
    },
  },
  props: {
    fetchStatus: Object,
    data: String,
  },
};
</script>

<style>
.policy-content p {
  font-size: 18px;
  line-height: 30px;
  margin: 12px 0px;
  font-weight: 400;
  margin: 20px 0px;
}

.policy-content h2 {
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 20px;
  line-height: 38px;
  font-weight: 600;
}

.policy-content h3 {
  font-size: 18px;
  text-transform: uppercase;
  margin: 20px 0px;
  line-height: 38px;
  font-weight: 600;
}
.policy-content h4 {
}
.policy-content img {
  width: 100%;
  height: auto;
  margin: 30px 0;
}
.policy-content ul {
  list-style: inside;
}
.policy-content ul li {
  margin: 8px 0px;
  font-size: 18px;
}
.policy-content a {
  color: #8b5cf6;
}
.policy-content blockquote {
  border-left: 4px solid #d4c1ff;
  padding-left: 15px;
  margin: 24px 0;
}

.policy-content blockquote p {
  font-size: 22px;
  font-weight: 500;
  line-height: 35px;
  margin: 0;
}

@media (max-width: 475px) {
  .policy-content p {
    font-size: 16px;
    line-height: 26px;
    margin: 12px 0;
  }

  .policy-content h2 {
    font-size: 17px;
    margin-bottom: 20px;
    line-height: 26px;
    font-weight: 600;
  }
  
  .policy-content ul {
    list-style: inside;
    margin: 0px;
  }
  .policy-content ul li {
    margin: 8px 0px;
    font-size: 16px;
  }
  
}
</style>
