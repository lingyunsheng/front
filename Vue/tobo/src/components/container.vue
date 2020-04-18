<template>
  <div class="container">
    <div class="container-item" v-for="item in res" :key="item.id">
      <div class="container-item-info">
        <ul class="info">
          <li class="info-detail">{{item.type}}</li>
          <li class="info-detail name">{{item.name}}</li>
          <li class="info-detail">{{item.time}}发布</li>
          <li class="info-detail category">{{item.category}}</li>
        </ul>
      </div>
      <div class="container-item-title">
        <p>{{item.title}}</p>
      </div>
      <div class="container-item-pv">
          <el-button class="like" plain size="mini" icon="el-icon-thumb">{{item.like}}</el-button>
          <el-button class="anwser" plain size="mini" icon="el-icon-chat-square">{{item.chat}}</el-button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { axios } from "axios";
import { Button } from "element-ui";
@Component
export default class Container extends Vue {
  private res: Array<[]> = [];
  // private data() {
  //   return {
  //     res: [],
  //   }
  // }
  private async created() {
    this.getContent();
  }
  private mounted() {
    return {};
  }
  private getContent() {
    this.$axios
      .get("/api/content", {})
      .then(res => {
        this.res = res.data.data;
        console.log("----", res.data);
      })
      .catch(err => {
        console.log("err", err);
      });
  }
}
</script>

<style lang='stylus' scoped>
.container {
  width: 100%;
  height: 100%;
  display: block;
  padding-left: 15px;

  .container-item {
    display: flex;
    flex-direction: column;
    height: 6rem;
    border-bottom: 1px solid #eee;

    // margin-bottom 10px
    .container-item-info {
      margin-bottom: -1rem;
      margin-left: -2rem;

      .info .info-detail {
        font-size: 0.8rem;
        list-style: none;
        float: left;
        padding-right: 0.3125rem;
        color: #B2BAC2;
        cursor: pointer;
      }

      .info .name {
        &:hover {
          color: #007fff;
        }
      }

      .info .category {
        &:hover {
          color: #007fff;
        }
      }
    }

    .container-item-title {
      font-size: 1.2rem;
      white-space: nowrap;
      overflow: hidden;
      font-weight: 700;
      color: #2E3135;
      margin-left: 0.3125rem;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .container-item-pv {
      font-size: 0.875rem;
      margin-left: 0.3125rem;
      padding-bottom: 0.3125rem;
      color: #B2BAC2;
      cursor: pointer;

      .like {
        width: 3rem;
        height: 1.4rem;
        color: #B2BAC2;
        cursor: pointer;
        float: left;
        text-align: center;
        padding-left:.3rem;
      }

      .anwser {
        width: 3rem;
        height: 1.4rem;
        margin-left:-4px;
        color: #B2BAC2;
        cursor: pointer;
        text-align: center;
        padding-left:.3rem;
      }
    }
  }
}
</style>