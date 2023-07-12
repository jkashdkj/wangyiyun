import styled from 'styled-components-vue';
import { getIPAddr,ip2Territory,fetchUserPlaylist,fetchUserHistory,fetchSongDetail} from '@/requerst';
import store from 'storejs'

const Wrapper = styled.div``;

export default {
  render() {
    return (
      <Wrapper>
        <div class="bg-[#f5f5f5]">
          {/* 头部 */}
          <div class='w-[100vw] h-[74vw] relative'>
            <div class='w-[100vw] h-[15vw] px-[4.5vw] flex items-center justify-between fixed top-0 z-[10]'>
            <Icon icon="ph:arrow-left"  class="text-[7vw] text-[#fff]" nativeOnClick={()=>this.$router.push('/NetEaseCloud')}/>
              <Icon icon="ri:more-2-line" class='dark:text-[#e9ebf2] text-[#fff] font-[800] text-[7vw]' />
            </div>
              <img src={this.user.backgroundUrl} alt="" class='w-[100vw] h-[74vw]'/>
          </div>
          {/* 内容 */}
          <div>
              <div class='mt-[-4vw] rounded-[15px] bg-[#fff] w-[92vw]  relative pt-[11vw] text-center pb-[3.8vw] ml-[4vw]'>
                <img src={this.user.avatarUrl} alt="" class='w-[18vw] h-[18vw] rounded-[50%] absolute top-[-9vw] left-1/2 translate-x-[-50%]'/>
                <p class='dark:text-[#DADADA] text-[5vw] text-[#253346]'>{this.user.nickname}</p>
                {/* 关注粉丝 */}
                <div class='wt-[3vw] text-[3vw] text-[#9396A2] mt-[2vw]'>
                    <span class='px-[2vw]'><span>{this.userData.profile.follows}</span> 关注</span>
                    <span class='px-[2vw]'><span >{this.userData.profile.followeds}</span> 粉丝</span>
                    <span class='px-[2vw]'>Lv.<span>{this.userData.level}</span></span>
                </div>
                {/* ip地址 */}
                <div class='h-[11vw] flex items-center justify-center'>
                  <span class='dark:bg-[#282828] dark:border-[#282828] dark:text-[#EEE] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw]  border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]'>IP:{this.ip.country}{this.ip.city}</span>
                  <span class='dark:bg-[#282828] dark:border-[#282828] dark:text-[#EEE] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw] flex items-center border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]'>
                     湖北随州
                  </span>
                  <span class='dark:bg-[#282828] dark:border-[#282828] dark:text-[#ECECEC] bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw]  border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]'>村龄 {Math.floor(this.userData.createDays / 365)} 年</span>
                </div>
                {/* 编辑资料 */}
                <div class="flex items-center justify-center pb-[4vw] mt-[3.24vw]">
                  <p class="text-center px-[3vw] py-[1vw]" onClick={()=>this.$router.push('/edit')}>编辑资料</p>
                  <span class='dark:text-[#EEEEEE] w-[5.7vw] h-[5.7vw] text-[#41495E] text-[2.9vw] flex items-center justify-center border-[1px] rounded-[200px] ml-[1.5vw]'>
                    <Icon icon="formkit:down" class='text-[2vw] mt-[0.6vw]'/>
                  </span>
                </div>
              </div>
          </div>
          {/* 导航栏 */}
          <div class='mt-[5vw] pb-[5vw]'>
            <div class='flex justify-center'>
              <span class='mr-[15vw]'>主页</span>
              <span class='mr-[15vw]'>动态</span>
              <span>博客</span>
            </div>
          </div>
          {/* 音乐品味 */}
          <div class='rounded-[15px] bg-[#fff] w-[92vw] text-[12px]  relative pb-[3.8vw] ml-[4vw]'>
              <p class='pt-[6vw] pb-[4vw] pl-[6vw]'>音乐品味</p>
              <div class='flex justify-center'>
                <div class='bg-[#fef5f3] w-[26.93vw] h-[32.22vw] rounded-[10px] flex content-between flex-wrap'>
                  <div class='pl-[2.22vw] pt-[2.31vw]'>
                    <p>我的喜欢</p>
                    <span>{this.myLove} 首 </span>
                  </div>
                  <div class='flex pl-[2vw] items-center pb-[3.61vw]'>
                    <Icon icon="ph:heart-fill" color="#a9aab2" class=" mr-[0.8vw] text-[2.6vw]"/>
                    <p>喜欢的音乐</p>
                  </div>
                </div>
                <div class='bg-[#fcf9eb] w-[25.93vw] h-[32.22vw] rounded-[10px] ml-[1.67vw] flex content-between flex-wrap'>
                  <div class='pl-[2.22vw] pt-[2.31vw]'>
                    <p>累计听歌</p>
                    <span>{this.userData.listenSongs}首</span>
                  </div>
                  <div class='flex pl-[2vw] items-center pb-[3.61vw]'>
                    <Icon icon="ri:rhythm-line" color="#a9aab2" class=" mr-[0.8vw] text-[2.6vw]"/>
                    <p>听歌排行榜</p>
                  </div>
                </div>
                <div class='bg-[#f4f8fc] w-[25.93vw] h-[32.22vw] rounded-[10px] ml-[1.67vw] flex content-between flex-wrap'>
                  <div class='pl-[2.22vw] pt-[2.31vw]'>
                    <p>本周关键词</p>
                    <span>在运存连宿两周</span>
                  </div>
                  <div class='flex pl-[2vw] items-center pb-[3.61vw]'>
                    <Icon icon="fa-solid:hourglass" color="#a9aab2" class=" mr-[0.8vw] text-[2.6vw]"/>
                    <p>黑胶时光机</p>
                  </div>
                </div>
              </div>
          </div>
            {/* 创建的歌单 */}
          <div class='mt-[3.69vw] rounded-[15px] bg-[#fff] w-[92vw] text-[12px]  relative pb-[3.8vw] ml-[4vw]'>
            <p class="text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw] pt-[4.96vw]">创建的歌单<span class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]">({this.create.length}个)</span></p>
            <ul class="px-[4vw] pb-[4vw]">{this.create.map((item) => (
              <li class="flex mb-[1.5vw]">
                <div class="relative pt-[0.6vw] mr-[2.6vw] ">
                  <img src={item.coverImgUrl} class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative"/>
                    <div class="dark:bg-[#434343] w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
                  </div>
                  <div class="flex flex-wrap items-center flex-1 py-[1vw]">
                    <p class="dark:text-[#E6E6E6] w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1">{item.name}</p>
                    <p class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1">
                      {item.trackCount}首，播放{this.dataTruncation(item.playCount)}次
                    </p>
                  </div>
              </li>
            ))}
            </ul>
          </div>
          {/* 收藏的歌单 */}
          <div class='mt-[3.69vw] rounded-[15px] bg-[#fff] w-[92vw] text-[12px]  relative pb-[3.8vw] ml-[4vw]'>
            <p class="text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw] pt-[4.96vw]">收藏的歌单<span class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]">({this.collect.length}个)</span></p>
            <ul class="px-[4vw] pb-[4vw]">{this.collect.map((item,index) => (
              index<10?
              <li class="flex mb-[1.5vw]">
                  <div class="relative pt-[0.6vw] mr-[2.6vw] ">
                      <img src={item.coverImgUrl} class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative"/>
                      <div class="dark:bg-[#434343] w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
                  </div>
                  <div class="flex flex-wrap items-center flex-1 py-[1vw]">
                      <p class="dark:text-[#E6E6E6] w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1">{item.name}</p>
                      <p class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1">
                          {item.trackCount}首，By{item.creator.nickname}，播放{this.dataTruncation(item.playCount)}次
                      </p>
                  </div>
              </li>:<div></div>))}
            </ul>
            {this.collect.length >= 10 ? <div class='dark:border-[#434343] border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]'>查看全部<Icon
                icon="ps:right" class='ml-[1vw] text-[2.5vw] font-[800]'/></div> : <div></div>}
          </div>
          {/* 评论 */}
          {this.history.length != 0 ? <div class="dark:bg-[#2C2C2C] ml-[4vw]  mt-[4vw] w-[92vw]  bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]">
                <div class="flex justify-between px-[4vw]">
                    <p class="dark:text-[#E9E9E9] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw]">我的评论<span class="dark:text-[#9D9D9D] text-[#9599a3] font-[200] text-[2.7vw] ml-[1.6vw]">({this.history.length})</span></p>
                    <Icon icon="entypo:lock" color="#b3b3b3"/>
                </div>
                {/* 评论歌曲 */}
                <div class="flex justify-between px-[4vw]">
                    <div class='flex items-center'>
                        <img src={this.picUrl} alt="" class='w-[8vw] h-[8vw] rounded-[5px] mr-[1.5vw]'/>
                        <div class="dark:text-[#99999A] text-[rgb(177,180,187)] text-[2.8vw]">博客「{this.music?.name}」 - {this.music.artist?.name}</div>
                    </div>
                    <Icon icon="uiw:like-o" color="#b3b3b3"/>
                </div>
                {/* 评论文字 */}
                <div class="dark:text-[#EDEDED] mt-[3.6vw] px-[4vw]  text-[3.6vw]  pb-[1vw] text-[#2a3146]">{this.history[0]?.content}</div>
                {/* 多久之前 */}
                {this.history.length >= 2 ? <div class='border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]'>查看全部<Icon icon="ps:right" class='ml-[1vw] text-[2.5vw] font-[800]'/></div> : <div></div>}
          </div>: <div></div>}
          {/* 基本信息 */}
          <div class='rounded-[15px] bg-[#fff] w-[92vw] text-[12px] mt-[4.63vw]  relative pb-[3.8vw] ml-[4vw]'>
            <div class='flex justify-between pt-[5vw] pb-[6.11vw] items-center'>
              <p class='pl-[5.37vw] '>基本信息</p>
              <div class='mr-[4.35vw] rounded-[18px] border text-center'>
                <p class='px-[3vw] py-[1.76vw]'>{this.userData.profileVillageInfo.title}</p>
              </div>
            </div>
            <div class='ml-[5.38vw] text-[#666]'>
              <div>村龄：{Math.floor(this.userData.createDays / 365)}年 (2019年4月注册)</div>
              <div class='mt-[6.11vw]'>地区: 湖北随州</div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  },
  data() {
    return {
      user:[],
      userData:[],
      ip:'',
      myLove:'',
      create:[],
      collect:[],
      history:[],//评论
      music:'',//评论的歌曲信息
      time:'',//评论的时间
      picUrl:[],//评论图片
    };
  },
  methods:{
    dataTruncation(playVolume) {
      if (playVolume > 100000000) {
          return `${Math.floor(playVolume / 100000000)}亿`;
      } else if (playVolume > 100000) {
          return `${Math.floor(playVolume / 10000)}万`;
      } else {
          return playVolume;
      }
    },
  },
  async created() {
    this.user=store.get('_cookieMusic');
    console.log(this.user);


    this.userData = store.get('__m__UserData');
    console.log(this.userData);


    const res4 = await fetchUserPlaylist(this.userData.profile.userId);
    console.log(res4);
    this.myLove = res4.data.playlist[0].trackCount 
    this.create= res4.data.playlist.filter(item => !item.subscribed);//创建的歌单
    this.collect= res4.data.playlist.filter(item => item.subscribed);//收藏的歌单
    console.log(this.collect);


    this.ip = getIPAddr().then(res=>{ip2Territory(res.data.ip).then(res => this.ip = res.data)})//ip

    //用户历史评论
    const res5 = await fetchUserHistory(this.userData.profile.userId);
    console.log(res5);
    if(res5.data.data.comments.length != 0) {
        this.history = res5.data.data.comments //评论
        this.music = JSON.parse(this.history[0].resourceInfo);//评论的歌曲信息
        const img = await fetchSongDetail(this.music.id);//歌曲信息
        this.picUrl = img.data.songs[0].al.picUrl;//歌曲图片
    }
  },
};
