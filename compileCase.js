const fs = require('fs')
const { execSync } = require('child_process')
const content = JSON.parse(fs.readFileSync('config.json').toString())
content.deviceId = +content.deviceId + 1
fs.writeFileSync('config.json', JSON.stringify(content, null, 2))
execSync('git add config.json')
execSync(`git commit -m 'style: 修改citest 配置'`)
const commitId = execSync(`git rev-parse HEAD`).toString().trim()
const branch = execSync(`git symbolic-ref --short -q HEAD`).toString().trim()
const commit_ref = fs.readFileSync('/Users/code/Desktop/Code/test/test/.git/COMMIT_EDITMSG').toString()
console.log()
console.log(commit_ref)
console.log(commitId);
console.log(branch);
console.log(`git update-ref refs/heads/${branch} ${commitId}`)
console.log()
execSync(`git push --no-verify`)
execSync(`git update-ref refs/heads/${branch} ${commitId}`)