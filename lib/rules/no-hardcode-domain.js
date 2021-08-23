/**
 * @fileoverview 不允许硬编码业务域名
 * @author roadaspen
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "不允许硬编码业务域名",
    },
    fixable: "code",
  },
  // core
  create(context) {
    function checkDomain(node) {
      // 匹配硬编码的业务域名的正则
      const Reg =
        /((ht|f)tp(s?):\/\/)[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-.?,'/\\+&amp;%$#_]*)?/;
      const content =
        (node.type === "Literal" && node.value) ||
        (node.type === "TemplateLiteral" && node.quasis[0].value.cooked);

      if (Reg.test(content)) {
        context.report({
          node,
          // 错误/警告提示信息
          message: "不允许硬编码业务域名",
        });
      }
    }

    return {
      // 返回事件勾子
      Literal: checkDomain,
      // 模版字符串
      TemplateLiteral: checkDomain,
    };
  },
};
