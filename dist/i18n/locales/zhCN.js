import { zhCN as dateLocale } from "date-fns/locale";
export var zhCN = {
    dateLocale: dateLocale,
    pagination: {
        previous: "上一页",
        next: "下一页",
        page: "第",
        pageOf: function (total) { return "\u9875\uFF0C\u5171 ".concat(total, " \u9875"); },
    },
    filter: {
        title: "筛选",
        clear: "清除",
        clearAll: "清除筛选",
        back: "返回",
        selectDate: "选择",
    },
    datePicker: { cancel: "取消", apply: "应用" },
    confirmationModal: { cancel: "取消" },
    select: {
        placeholder: "请选择",
        search: "搜索",
        empty: "未找到结果",
        clear: "清除",
    },
    input: { placeholder: "请输入" },
    toast: { error: "错误", success: "成功" },
    table: { copy: "复制" },
};
