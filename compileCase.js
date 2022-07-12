const fs = require('fs')
const { execSync } = require('child_process')
const content = JSON.parse(fs.readFileSync('config.json').toString())
content.deviceId = +content.deviceId + 1
fs.writeFileSync('config.json', JSON.stringify(content, null, 2))
execSync('git add config.json')
execSync(`git commit -m 'style: 修改citest 配置'`)
execSync(`git log --pretty=one | echo`)
// execSync(`git push --no-verify`)