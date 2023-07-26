"use strict";
const common_vendor = require("../common/vendor.js");
function multiUpload(tempFiles) {
  return new Promise((resolve, reject) => {
    let results = [];
    function createUploadPromise(filePath) {
      return new Promise((resolve2, reject2) => {
        common_vendor.wx$1.uploadFile({
          filePath,
          name: "file",
          url: "http://49.234.215.103:7000/zhailijia/wechat/xcxUser/upload",
          header: {
            "token": common_vendor.index.getStorageSync("token")
          },
          success(res) {
            resolve2(res);
          },
          fail(error) {
            reject2(filePath);
          }
        });
      });
    }
    async function allSettledUpload(tempFiles2) {
      let tempFilePromises = tempFiles2.map((fileUrl) => createUploadPromise(fileUrl));
      let res = await Promise.allSettled(tempFilePromises);
      let fulfilleds = res.filter((p) => p.status === "fulfilled");
      results.push(...fulfilleds.map((item) => JSON.parse(item.value.data)));
      if (results.length !== tempFiles2.length) {
        let rejects = res.filter((p) => p.status === "rejected");
        if (rejects.length) {
          allSettledUpload(rejects.map((item) => item.reason));
        }
      } else {
        resolve(results);
      }
    }
    allSettledUpload(tempFiles);
  });
}
exports.multiUpload = multiUpload;
