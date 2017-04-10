var Mock = require('./mock');
var mockMaps = require('./mockApi');
const HOST = 'http://m.ctrip.com';

function ajax(options, isMock) {
    let {url} = options;
    // mock
    isMock = true;
    if (isMock) {
        var timeOut = Math.random() * 200 + 200;
        setTimeout(function() {
            var res = mockMaps[url];
            var mockRes = Mock.mock(res);
            options.success && options.success(mockRes);
            options.complete && options.complete();
        }, timeOut);
    } else {
        wx.request({
            url: `${HOST}/${url}`,
            data: options.data || {},
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: options.header || {}, // 设置请求的 header
            success: options.success || null,
            fail: options.fail || null,
            complete: options.complete || null,
        });
    }
}

module.exports = ajax;