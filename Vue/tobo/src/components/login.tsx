import { Component, Vue, Provide, Prop } from "vue-property-decorator";
import Blog from './blog.vue';
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
        <Blog></Blog>
      </div>
    );
  }
}
