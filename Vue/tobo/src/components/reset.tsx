import { Component, Vue } from "vue-property-decorator";
import { Tabs, Input, Button } from "element-ui";
Vue.use(Tabs, Input, Button);
@Component({})
export default class Reset extends Vue {
  private activeName: string = "first";
  private handleClick = (tab: any, event: any) => {
    console.log(tab, event);
  };
  private render() {
    return (
      <div
        className="reset-password"
        style={{
          width: "100%",
          height: "1000px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          className="reset-password-form"
          style={{ width: "400px", height: "400px", background:'#fff', paddingLeft: '15px'}}
        >
          <h1 claaaName="reset-password-title">重置密码</h1>
          <el-tabs
            name= {this.activeName}
            onClick={() => this.handleClick(tab, event)}
          >
            <el-tab-pane label="邮箱重置" name="first" >
              <el-input name="input" placeholder="请输入邮箱" style={{width:'300px', border: 'none', marginBottom: '10px'}}></el-input>
              <el-button type="primary" style={{width:'300px', border: 'none', marginBottom: '10px'}}>发送邮件</el-button><br/>
              <router-link to='/blog' style={{marginTop:'10px', color: '#007fff', width:'300px',listStyle:'none', textAlign: 'center'}}>返回首页</router-link>
            </el-tab-pane>
            <el-tab-pane label="手机重置" name="second">
              <el-input name="phone" placeholder="请输入手机号" style={{width:'300px', border: 'none', marginBottom: '10px'}}></el-input>
              <el-input name="code" placeholder="请输入验证码" style={{width:'300px', border: 'none', marginBottom: '10px'}}></el-input>
              <el-input name="pass" placeholder="请输入新密码" style={{width:'300px', border: 'none', marginBottom: '10px'}}></el-input>
              <el-button type="primary" style={{width:'300px', border: 'none', marginBottom: '10px'}}>确定</el-button>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    );
  }
}
