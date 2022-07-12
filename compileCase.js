const fs = require('fs')
const { execSync } = require('child_process')
const content = JSON.parse(fs.readFileSync('config.json').toString())
content.deviceId = +content.deviceId + 1
fs.writeFileSync('config.json', JSON.stringify(content, null, 2))
execSync('git add config.json')
execSync(`git commit -m 'style: 修改citest 配置'`)
const commitId = execSync(`git rev-parse --short HEAD`).toString().trim()
const branch = execSync(`git symbolic-ref --short -q HEAD`).toString().trim()
console.log(commitId);
console.log(branch);

execSync(`git push --no-verify`)
execSync(`git update-ref refs/heads/${branch} ${commitId}`)