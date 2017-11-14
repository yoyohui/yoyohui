<template>
    <div>
        <!-- 1.导航部分 -->
        <mt-header fixed title="Vue项目"></mt-header>

        <!-- 2.中间各个组件之间的切换部分 -->

        <!-- 3.tabbar -->
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact">
                    <span class="mui-badge">0</span>
                </span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
