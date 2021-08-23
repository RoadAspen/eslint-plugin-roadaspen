/**
 * @fileoverview 不允许硬编码业务域名
 * @author roadaspen
 */
"use strict";

const rule = require("../../../lib/rules/no-hardcode-domain"),
  RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();
ruleTester.run("no-url-string", rule, {
  valid: [
    "bar",
    "baz",
    `
   var s = {
     x: "zcygov"
   };
   `,
    "console.log(ssadada)",
  ],
  invalid: [
    {
      code: `
               var s = "http://tezign.com"
             `,
      errors: [
        {
          message: "不允许硬编码业务域名",
        },
      ],
    },
    {
      code: `
             var s = {
               x: "http://bidding.zcygov.cn"
             };
             `,
      errors: [
        {
          message: "不允许硬编码业务域名",
        },
      ],
    },
    {
      code: 'console.log("https://baidu.com")',
      errors: [
        {
          message: "不允许硬编码业务域名",
        },
      ],
    },
  ],
});
