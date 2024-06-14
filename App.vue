<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	.items-start{
		align-items: flex-start;
	}
	.flex-row{
		display: flex;
		flex-direction: row;
	}
	.flex-col{
		display: flex;
		flex-direction: column;
	}
	.relative{
		position: relative;
	}
	.mt-1{
		margin-top: 26rpx;
	}
	.mt-2{
		margin-top: 24rpx;
	}
	/*每个页面公共css */
</style>
