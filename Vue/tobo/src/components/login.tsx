import { Component, Vue, Provide, Prop } from "vue-property-decorator";
import { Button } from "element-ui";
// Vue.use(Button);
@Component({})
export default class Login extends Vue {
  @Provide() private count: number = 9;
  public handleClick() {
    this.count++;
  }
  public render() {
    return (
      <div>
        {this.count}
        <button >点击我</button>
        <div class='login' style={{color: 'red', marginTop: '10px'}}>
            <el-button type='primary' onclick={this.handleClick}>登录</el-button>
        </div>
      </div>
    );
  }
}
