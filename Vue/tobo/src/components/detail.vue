<template>
  <div class="detail">
    <Head></Head>
    <div class="detail-container">
      <div class="detail-item-pv">
        <el-button class="like" plain size="mini" icon="el-icon-thumb">{{res.like}}</el-button>
        <el-button class="anwser" plain size="mini" icon="el-icon-chat-square">{{res.chat}}</el-button>
      </div>
      <div class="detail-item">
        <div class="detail-item-info">
          <ul class="info">
            <li class="info-detail">{{res.type}}</li>
            <li class="info-detail name">{{res.name}}</li>
            <li class="info-detail">{{res.time}}发布</li>
            <li class="info-detail category">{{res.category}}</li>
          </ul>
        </div>
        <div class="detail-item-title">
          <p>{{res.title}}</p>
        </div>
        <div class="detail-item-content">
          <p>{{res.content}}</p>
        </div>
      </div>
      <div class="detail-banner">
        <Banner></Banner>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Head from "./head";
import Banner from "./banner";
import { axios } from "axios";
import { Button } from "element-ui";
@Component({
  components: {
    Head,
    Banner
  }
})
export default class Detail extends Vue {
  private Id: number | string = "";
  private res: Array<[]> = [];
  private created() {
    this.getContent();
  }
  private getContent() {
    this.Id = this.$route.query.id;
    console.log("this。id", this.Id);
    this.$axios
      .get("/api/content", {})
      .then(res => {
        let arr = res.data.data;
        console.log("----", res.data);
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id === this.Id) {
            let result = arr[i];
            this.res = result;
            console.log("result", result);
          }
        }
      })
      .catch(err => {
        console.log("err", err);
      });
  }
}
</script>

<style lang='stylus' scoped>
.detail {
  width: 100%;
  height: 100%;
  display: block;
  background: #f4f5f5;

  .detail-container {
    display: flex;
    flex-direction: row;
    margin-top: 1.25rem;

    .detail-item-pv {
      padding-left:6.25rem;
      padding-top:12.5rem;
      margin-left: 1.25rem;
      font-size: 0.875rem;
      padding-bottom: 0.3125rem;
      color: #B2BAC2;
      cursor: pointer;

      .like {
        width: 3rem;
        height: 3rem;
        color: #B2BAC2;
        cursor: pointer;
        float: left;
        text-align: center;
        padding-left: 0.3rem;
        border-radius: 100%;
      }

      .anwser {
        width: 3rem;
        height: 3rem;
        color: #B2BAC2;
        cursor: pointer;
        text-align: center;
        padding-left: 0.3rem;
        border-radius: 100%;
      }
    }

    .detail-item {
      width: 45%;
      height: 1000px;
      margin: 0 1.875rem;
      background: #fff;

      // margin-bottom 10px
      .detail-item-info {
        .info {
          margin-left: -22px;
          padding-top: 20px;
        }

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

      .detail-item-title {
        margin-left: 1.25rem;
        font-size: 1.2rem;
        white-space: nowrap;
        font-weight: 700;
        color: #2E3135;
        padding-top: 3.125rem;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      .detail-item-content {
        margin-left: 1.25rem;
        font-size: 1rem;
        white-space: normal;
        padding-top: 3.125rem;
        cursor: pointer;
      }
    }

    .detail-banner {
      width: 200px;
      height: 200px;
    }
  }
}
</style>