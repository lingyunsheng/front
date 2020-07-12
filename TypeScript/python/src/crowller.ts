// 爬虫工具 superagent
// npm install --save superagent 爬取ajax
// ts -> .d.ts 翻译文件 ->js
// npm install @types/superagent
import superagent from "superagent";
import cheerio from "cheerio";

interface Course {
  title: string;
  count: any;
}

class Crowller {
  private secret = "secretKey";
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  // private rawHtml ='';
  getJsonInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $(".course-item");
    const courseInfo: Course[] = [];
    // console.log(courseItems.length);
    courseItems.map((index, item) => {
      const desc = $(item).find(".course-desc");
      const title = desc.eq(0).text();
      const count = parseInt(
        desc
          .eq(1)
          .text()
          .split(":")[1],
        10
      );
      //   console.log(title, count);
      courseInfo.push({
        title,
        count
      });
      const result = {
          time:(new Date().getTime()),
          data:courseInfo
      };
      console.log(result);
    });
  }

  async getRawHtml() {
    // 类型定义文件
    const result = await superagent.get(this.url);
    //    this.rawHtml=result.text;
    //    console.log(result.text);
    // 定义
    // this.getJsonInfo(result.text);
    return result.text;
  }

  async initSpiderProcess() {
     const html = await this.getRawHtml()
     this.getJsonInfo(html)
  }

  constructor() {
    // console.log('constructor');
    // 获取url
    this.initSpiderProcess();
  }
}

const crowller = new Crowller();
