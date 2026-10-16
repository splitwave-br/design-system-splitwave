import { zhCN as dateLocale } from "date-fns/locale";
import type { TDesignSystemMessages } from "../types";

export const zhCN: TDesignSystemMessages = {
  dateLocale,
  pagination: {
    previous: "上一页",
    next: "下一页",
    page: "第",
    pageOf: (total) => `页，共 ${total} 页`,
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
