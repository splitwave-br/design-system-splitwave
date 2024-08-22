"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalProvider = ModalProvider;
exports.useModal = useModal;
const react_1 = __importStar(require("react"));
const __1 = require("..");
const useAdjustScrollbar_1 = __importDefault(require("@/hooks/useAdjustScrollbar"));
const ModalContext = (0, react_1.createContext)({});
let id = 0;
function ModalProvider({ children }) {
    const [modalQueue, setModalQueue] = (0, react_1.useState)([]);
    const { handleRemoveScrollbar } = (0, useAdjustScrollbar_1.default)();
    (0, react_1.useEffect)(() => {
        handleRemoveScrollbar(modalQueue.length > 0);
    }, [handleRemoveScrollbar, modalQueue.length]);
    const openModal = (component, onClose) => {
        id++;
        setModalQueue((prevQueue) => [
            ...prevQueue,
            { id: `modal-${id}`, component, onClose },
        ]);
    };
    const handleShift = (...args) => {
        var _a;
        let currentModal;
        const newQueue = [...modalQueue];
        if (newQueue.length === 0) {
            setModalQueue([]);
        }
        currentModal = newQueue[newQueue.length - 1];
        newQueue.pop();
        setModalQueue(newQueue);
        (_a = currentModal === null || currentModal === void 0 ? void 0 : currentModal.onClose) === null || _a === void 0 ? void 0 : _a.call(currentModal, ...args);
    };
    return (<ModalContext.Provider value={{
            openModal,
            closeModal: handleShift,
        }}>
      {children}

      {modalQueue.map((modal) => (<__1.Modal.Overlay key={modal.id} onClose={handleShift}>
          {modal.component}
        </__1.Modal.Overlay>))}
    </ModalContext.Provider>);
}
function useModal() {
    return (0, react_1.useContext)(ModalContext);
}
