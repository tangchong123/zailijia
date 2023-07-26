// 参数： 一个数组 ，chooseImage调用返回的临时图片地址
export default function multiUpload(tempFiles) {
  return new Promise((resolve,reject)=> {
    let results = []  // 上传成功后的

    // 创建一个把wx.uploadFile转成promise对象的函数
    function createUploadPromise(filePath) {
      return new Promise((resolve,reject)=> {
        wx.uploadFile({
          filePath,
          name: "file",
          url: "http://49.234.215.103:7000/zhailijia/wechat/xcxUser/upload",
          header:{
              "token":uni.getStorageSync("token")
          },
          success(res) {
            resolve(res)
          },
          fail(error) {
            reject(filePath)  // 返回失败的url
           },
        })
      })
    }

    // 上传图片
    async function allSettledUpload(tempFiles) {
      // 遍历出多个上传对象
      let tempFilePromises = tempFiles.map(fileUrl=> createUploadPromise(fileUrl))
      // 拿到所有的返回结果
      let res = await Promise.allSettled(tempFilePromises)
      // 处理数据
      let fulfilleds = res.filter(p=>p.status === "fulfilled") // 成功上传了的
      results.push(...fulfilleds.map(item=>JSON.parse(item.value.data)))

      // 如果有错误呢？
      if(results.length!==tempFiles.length) {
        // 过滤上传失败的图片
        let rejects = res.filter(p=>p.status === "rejected")
        if(rejects.length) { // 有失败的
          allSettledUpload(rejects.map(item=>item.reason))  // 递归上传
        }
      }else {
        resolve(results)
      }
    }
    allSettledUpload(tempFiles)  // 调用上传所有图片的函数
  })
}
