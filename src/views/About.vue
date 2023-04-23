<template>
  <div class="about">
    <div id="d_header" class="card-info">
      <el-row>
        <el-col :span="18">
          <el-row>
            <el-col>
              <div>
                <h1>{{ title.username }}</h1>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <div class="tags">
                <el-tag>性别：{{ title.gender }}</el-tag>
                <el-tag>年龄： {{ title.age }}岁</el-tag>
                <el-tag>籍贯：{{ title.nativePlace }}</el-tag>
                <el-tag class="el-icon-phone"> 电话：{{ title.phone }}</el-tag>
                <el-tag class="el-icon-message">
                  邮箱：{{ title.email }}</el-tag
                >
              </div>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col>
              <div class="tags">
                <el-tag type="info">毕业院校：{{ title.school }}</el-tag>
                <el-tag type="info"
                  >学历：{{ title.educationalBackground }}</el-tag
                >
                <el-tag type="info">求职意向：{{ title.intention }}</el-tag>
                <el-tag type="info">期望薪资： {{ title.wantedSalary }}</el-tag>
                <el-tag class="el-icon-location" type="info">
                  期望城市： {{ title.city }}</el-tag
                >
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6">
          <div class="float-right">
            <img
              src="../assets/avatar.png"
              alt="头像"
              style="border-radius:10%;"
              class="clearfix"
            />
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="d_op" class="card-info">
      <div class="title">
        <img src="../assets/prefix.png" style="float: left;" />
        <h2 class="title-content clearfix">个人优势</h2>
      </div>
      <el-card :body-style="cardBodyStyle" shadow="hover">
        <div class="content content-opts">
          <p v-html="opts" />
        </div>
      </el-card>
    </div>
    <!-- 工作经验 begin -->
    <div id="d_work" class="card-info page-break-after">
      <div class="title">
        <img src="../assets/prefix.png" style="float: left;" />
        <h2 class="title-content clearfix">工作经历</h2>
      </div>
      <el-card
        :body-style="cardBodyStyle"
        shadow="hover"
        v-for="exp in companies"
        :key="exp.name"
      >
        <div class="content">
          <div slot="header">
            <el-row>
              <el-col :span="12"
                ><h3>{{ exp.name }}</h3></el-col
              >
              <el-col :span="12"
                ><span class="float-right"
                  >工作时间： {{ exp.times }}</span
                ></el-col
              >
            </el-row>
          </div>
          <div class="exp-content">
            <div class="exp-content-title">
              职责：
            </div>
            <div>
              <p v-html="exp.summary"></p>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <!-- 工作经验 end -->

    <!-- 项目经验 begin -->
    <div id="d_projects" class="card-info page-break-after">
      <div class="title">
        <img src="../assets/prefix.png" style="float: left;" />
        <h2 class="title-content clearfix">项目经验</h2>
      </div>
      <el-card :body-style="{ padding: '10px 20px' }" shadow="hover">
        <div>
          <my-projects />
        </div>
      </el-card>
      <!-- <el-card :body-style="{padding:'10px 20px'}" shadow="hover">
        <div class="content">
          <el-collapse :value="projects">
            <el-collapse-item
              v-for="(project, index) in projects"
              :key="project.name"
              :name="index"
            >
              <template slot="title">
                <div class="project-title">
                  <h5>{{ project.name }}</h5>
                </div>
              </template>
              <div
                class="project-content"
                v-for="(item, idx) in project.items"
                :key="idx"
              >
                <div class="project-content-head">
                  <el-row>
                    <el-col :span="12">
                      <span>项目名称： {{ item.name }}</span>
                    </el-col>
                    <el-col :span="12">
                      <span class="float-right clearfix"
                        >项目角色： {{ item.job }}</span
                      >
                    </el-col>
                  </el-row>
                </div>
                <div>
                  <p v-html="item.description"></p>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
         
        </div>
      </el-card> -->
    </div>
    <!-- 项目经验 end -->

    <!-- 教育经历 begin -->
    <div id="d_edu" class="card-info">
      <div class="title">
        <img src="../assets/prefix.png" style="float: left;" />
        <h2 class="title-content clearfix">教育经历</h2>
      </div>
      <el-card :body-style="cardBodyStyle" shadow="hover">
        <div class="content">
          <my-education />
        </div>
      </el-card>
    </div>
    <!-- 教育经历 end -->

    <!-- <div class="float-div">
      <drag-ball
        :distanceBottom="10"
        :distanceRight="60"
        :isScrollHidden="false"
        :zIndex="999"
      ></drag-ball>
    </div> -->
  </div>
</template>
<script lang="ts">
// import Vue from 'vue'
import "github-markdown-css";
import "highlight.js";
import MyProjects from "../assets/docs/projects.md";
import MyEducation from "../assets/docs/education.md";
import DragBall from "../components/dragBall.vue";

export default {
  name: "AboutMe",
  components: {
    MyProjects,
    MyEducation,
    DragBall,
  },
  data() {
    return {
      title: {
        avatar: "../assets/avatar.png",
        username: "阙福琪",
        age: 27,
        gender: "男",
        nativePlace: "福建龙岩",
        email: "wolfife@163.com",
        phone: "17605084190",
        educationalBackground: "本科",
        school: "福建江夏学院",
        intention: ".NET C#",
        wantedSalary: "14k",
        city: "厦门",
      },
      opts:
        "工作认真细致，在开发中力求开发任务拆分详细得当; <br> 做事认真仔细，对于复杂的事情能够保持冷静并认真分析;<br> 平时热爱学习，喜欢钻研新鲜知识，勇于尝新并应用在实践中。<br>熟悉多种ORM框架的使用，包括 EF、Dapper、NHibernate 等;",
      companies: [
        {
          name: "厦门链石网络科技有限公司",
          position: ".NET",
          times: "2019年5月-2023年3月",
          summary: `1. 负责商城后端 API  开发与维护<br />2. 定时任务系统的开发与维护<br />3. WPF 程序的服务开发<br />4. 组内工作任务分配与协调`,
        },
        {
          name: "弘扬软件股份有限公司",
          position: ".NET",
          times: "2018年1月-2019年5月",
          summary:
            "以.NET为平台，开发一套基于B/S架构的系统 <br />系统需要实现经济系统、看诊以及提供接口供第三方调用，同时需要调用来自第三方的接口 <br />接口形式有WebService、WebApi或者是数据库中间表，系统要求使用相关设计模式实现系统高效、便捷的使用体验。",
        },
      ],
      cardBodyStyle: {
        padding: "10px 20px",
      },
    };
  },
  mounted() {
    this.get();
  },
  methods: {
    get() {
      // for (let [key, value] in Object.entries(this.title)) {
      //   console.log("key :>> ", key);
      //   console.log("value :>> ", value);
      // }
    },
    mailTo() {
      location.href = `mailto:${this.title.email}`;
    },
  },
};
</script>

// markdown 样式
<style lang="css">
  .hljs-line-numbers {
    text-align: right;
    /* 以下3行要加 !important 来避免样式覆盖 */
    border-right: 1px solid #ccc !important;
    margin-right: 10px !important;
    padding-right: 5px !important;
    color: #999;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
<style lang="stylus" scoped>
.float-right {
  float: right;
}
.page-break-after{
  page-break-after: always;
}

.title {
  background-color: #f1fafa;
  text-align: left;
  vertical-align: middle;
  color: #00a6a6;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 50px;
}
.title-content {
  margin-left: 10px;
  margin-bottom: 0;
}

.card-info {
  margin-bottom: 10px;
}
.content {
  min-height: 10vh;
  margin: 10px;
  &-opts{
    min-height: 10px !important;
    height: auto;
  }
  &-markdown{
    // margin: 0;
    // padding: 20px;
    background-color: #fff;
    // box-sizing: border-box;
    // $:hover {
    //   -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    //   box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    // }
  }
}
.content .seq-content li {
  margin: 5px;
}
.tags span {
  margin: 5px !important;
  &:first-child{
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
}

.exp-content {
  &-title {
    font-size:14px;
    font-weight:bold;
    margin-bottom:5px;
  }
}

.project {
  &-title {
    font-size: 14px;
    font-style: italic;
  }
  &-content {
    &-head {
      font-size: 13px;
      font-weight: bold;
    }
    margin: 10px;
  }
}
.qrCode{
  position: absolute;
  z-index 999;
  width: 100%;
  height: 100%;

}
.float-position{
  font-size: 12px;
  position: fixed;
  z-index: 500!important;
  right: 0;
  top: 50%;
  width: 48px;
  height: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}
</style>
