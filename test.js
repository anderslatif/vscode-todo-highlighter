
lineComment = /(?:^|\s)\/\/(.+?)$/gms;

blockComment = /\/\*(.*?)\*\//gms;

const todoRegExLineComment = /(todo.*)/gmsi


console.log(todoRegExLineComment.exec(`
// todo test
// todo test
// todo test
`));