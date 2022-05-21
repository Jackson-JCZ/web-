<template>
    <div>
        <p class="title">推荐歌单</p>
        <van-row gutter="6">
            <van-col span="8" v-for="obj in reList" :key="obj.id">
                <p class="song_name">{{ obj.name }}</p>
            </van-col>
        </van-row>
        <p class="title">最新音乐</p>
        <SongItem v-for="obj in songList"
        :key="obj.id"
        :name="obj.name"
        :author="obj.song.artists[0].name"
        :id="obj.id"
        ></SongItem>
    </div>
</template>

<script>
// 目标: 铺设推荐歌单
// 1. van-row和van-col来搭建外框布局
// 2. van-col里内容(van-image和p)
// 3. 调整间距和属性值
// 4. 调用封装的api/index.js-推荐歌单api方法
// 5. 拿到数据保存到data里变量-去上面循环标签

// 目标: 铺设最新音乐
// 1. van-cell铺设一套标签结构
// 2. 自定义右侧插槽里小图标, 调整垂直居中
// 3. api/Home.js和api/index.js-封装导出获取最新音乐接口方法
// 4. 获取数据循环铺设页面即可

import { recommendMusicAPI, newMusicAPI } from "@/api"
import SongItem from "@/components/SongItem"

export default {
    data() {
        return {
            reList: [], //推荐歌单数据
            songList: []    //最新音乐数据
        }
    },
    async created() {
        const res = await recommendMusicAPI({
            limit: 6
        });
        console.log(res);
        this.reList = res.data.result;

        const res2 = await newMusicAPI({
            limit: 20
        })
        console.log(res2);
        this.songList = res2.data.result
    },
    components: {
        SongItem
    }
}
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>