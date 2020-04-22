<template>
  <div class="header-container">
    <div class="header-select">
      <ul class="select-item">
        <li
          class="select-items"
          :class="[activeIndex==index ? 'active' : 'deactive']"
          :key="item.key"
          v-for="(item, index) in selectItem"
          @click="changeSelectItems(item, index)"
        >{{item.name}}</li>
      </ul>
    </div>
    <div :is="currentComponent"></div>
  </div>
</template>
<script lang='ts'>
import {
  Component,
  Vue,
  Model,
  Ref,
  Provide,
  Emit
} from "vue-property-decorator";
import { Button, Dialog, Input, Message, Dropdown } from "element-ui";
@Component({})
export default class Rank extends Vue {
  private activeIndex: number = 0;
  private selectItem: Array<any> = [
    {
      name: "推荐",
      key: "rank"
    },
    {
      name: "后端",
      key: "backend"
    },
    {
      name: "前端",
      key: "frontend"
    },
    {
      name: "人工智能",
      key: "ai"
    },
    {
      name: "开发工具",
      key: "tool"
    },
    {
      name: "阅读",
      key: "read"
    }
  ];
  private actived: boolean = false;
  private created() {
    return {};
  }
  private mounted() {
    return {};
  }
  private changeSelectItems(item, index) {
    console.log("点击了:" + item.name + "下标是:" + index);
    this.activeIndex = index;
  }
}
</script>

<style lang='stylus' scoped>
.header-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin: 0;
  padding: 0;

  .header-select {
    width: 100%;
    height: 3.125rem;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 0 10.5rem 0 12.5rem;

    .select-item {
      .select-items {
        list-style: none;
        float: left;
        margin-left: 1rem;
        color: #71777C;

        &:hover {
          color: #007fff;
          cursor: pointer;
        }
      }

      .active {
        color: #007fff;
      }

      .deactive {
        color: #71777C;
      }
    }
  }
}
</style>