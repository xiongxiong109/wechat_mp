const app = getApp();

Page({
	onShow: function() {
		console.log(app);
	},
	data: {
		title: 'bind data',
		show: false,
		list: [
			{nm: 'xxx', age: 21},
			{nm: 'ooo', age: 22}
		],
		article: {
			title: '今日头条',
			content: 'hello'
		}
	},
	toggleCondition: function() {
		var show = this.data.show;
		this.setData({
			show: !show
		});
	},
	toggleNm: function(event) {
		var targetData = event.currentTarget.dataset;
		console.log(targetData);
	},
	add: function() {
		var list = this.data.list;
		this.setData({
			list: [...list, {nm: 'xxx', age: Math.random()}]
		})
	}
})