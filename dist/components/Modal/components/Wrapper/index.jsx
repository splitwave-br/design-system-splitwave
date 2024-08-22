"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = require("@/components/Icon");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const useModal_1 = require("../../hooks/useModal");
const Wrapper = ({ children, title, onClose }) => {
    const { closeModal } = (0, useModal_1.useModal)();
    const handleClose = () => {
        closeModal();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    return (<div className={styles_module_scss_1.default.wrapper} onClick={(e) => e.stopPropagation()}>
      {title && (<div className={styles_module_scss_1.default.header}>
          <button onClick={handleClose} className={styles_module_scss_1.default.backBtn}>
            <Icon_1.Icon name='back'/>
          </button>
          <span className={styles_module_scss_1.default.title}>{title}</span>
          <button onClick={handleClose} className={styles_module_scss_1.default.closeBtn}>
            <Icon_1.Icon size={'micro'} name='cancel'/>
          </button>
        </div>)}
      {children}
    </div>);
};
exports.default = Wrapper;
