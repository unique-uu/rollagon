import fs from 'fs'
//import fse from 'fs-extra'
import path from 'path'

const dir = path.join(__dirname, '../dist')
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, 744)
}

//fse.copySync(path.join(__dirname, `../../client/build`), path.join(__dirname, `../dist/public`))
fs.copyFileSync(path.join(__dirname, `../package.json`), path.join(__dirname, `../dist/package.json`))
fs.copyFileSync(path.join(__dirname, `../web.config`), path.join(__dirname, `../dist/web.config`))

console.log('Done 🏁')
