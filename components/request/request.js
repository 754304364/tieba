const baseUrl = 'http://101.132.235.218:4000/api'   
const request = (url = '', date = {}, type = '', header = {
}) => {
    return new Promise((resolve, reject) => {
        uni.request({
            method: type,
            url: baseUrl + url,
            data: date,
            header: header,
            dataType: 'json',         
        }).then((response) => {
            setTimeout(function() {
                uni.hideLoading();
            }, 100);
            let [error, res] = response;    
            resolve(res.data);
        }).catch(error => {
            let [err, res] = error;
            reject(err)
        })
		
    });
}
export default request