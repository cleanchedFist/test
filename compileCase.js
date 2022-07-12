const fs = require('fs')
const { execSync } = require('child_process')
const content = JSON.parse(fs.readFileSync('config.json').toString())
content.deviceId = +content.deviceId + 1
fs.writeFileSync('config.json', JSON.stringify(content, null, 2))
execSync('git add config.json')
execSync(`git commit -m 'style: 修改citest 配置'`)
const a = execSync(`git log --pretty=one`)
console.log(a);
// execSync(`git push --no-verify`)