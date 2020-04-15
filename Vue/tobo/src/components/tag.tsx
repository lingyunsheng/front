import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class Tag extends Vue {
  public render() {
    return (
      <div class="hot-tags-all" style={style}>
        <ul class="tags-item">
          <li class="tags-items">框架</li>
          <li class="tags-items">面经</li>
          <li class="tags-items">算法</li>
          <li class="tags-items">项目</li>
        </ul>
      </div>
    );
  }
}
