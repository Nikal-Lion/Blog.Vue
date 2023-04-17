const md = require('markdown-it')({
  html: true
})

module.exports = function (source) {
  // console.group('markdown');
  // console.log('source :>> ', source);
  this.cacheable()

  // source 是原始文件内容，html 是用 markdown-it 编译后的 html 内容
  const html = md.render(source)
  const template = (
    `<template>
    <div class="markdown-body">
    ${html}
    </div>
    </template>
    <style scoped>
      body {
        width: 100%;
      }
      .markdown-body {
        width: 100% !important;
      }
      </style>
      `
      )
  // console.log('markdown html :>> ', template);
  // console.groupEnd();

  return template
}