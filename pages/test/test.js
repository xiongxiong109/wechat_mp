Page({
	data: {
		title: 'bind data',
		show: false,
		list: [
			{nm: 'xxx', age: 21},
			{nm: 'ooo', age: 22}
		]
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