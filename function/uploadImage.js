
const fetch = require ('node-fetch');
const  { FormData, Blob }  =  require("fix-esm").require('formdata-node');
const  { fileTypeFromBuffer } = require("fix-esm").require("file-type");
let axios = require('axios')
let BodyForm = require('form-data')
let fs = require('fs')
/**
 * Upload image to telegra.ph
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`s
 * @param {Buffer} buffer Image Buffer
 * @return {Promise<string>}
 */
exports.defaultP = async buffer => {
  const { ext, mime } = await fileTypeFromBuffer(buffer)
  var form = new FormData()
  const blob = new Blob([buffer.toArrayBuffer()], { type: mime })
  form.append('file', blob, 'tmp.' + ext)
  var res = await fetch('https://telegra.ph/upload', {
    method: 'POST',
    body: form
  })
  var img = await res.json()
  if (img.error) throw img.error
  return 'https://telegra.ph' + img[0].src
}
function TelegraPh2 (Path) {
  return new Promise (async (resolve, reject) => {
    if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
    try {
      const form = new FormData()
      const blob = new Blob([buffer.toArrayBuffer()], { type: mime })
      form.append('file', blob, 'tmp.' + ext)
      const data = await  axios({
        url: "https://telegra.ph/upload",
        method: "POST",
        headers: {
          ...form.getHeaders()
        },
        data: form
      })
      return resolve("https://telegra.ph" + data.data[0].src)
    } catch (err) {
      return reject(new Error(String(err)))
    }
  })
}
