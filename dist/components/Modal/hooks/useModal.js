"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalProvider = ModalProvider;
exports.useModal = useModal;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const __1 = require("..");
const useAdjustScrollbar_1 = __importDefault(require("../../../hooks/useAdjustScrollbar"));
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
        let currentModal;
        const newQueue = [...modalQueue];
        if (newQueue.length === 0) {
            setModalQueue([]);
        }
        currentModal = newQueue[newQueue.length - 1];
        newQueue.pop();
        setModalQueue(newQueue);
        currentModal?.onClose?.(...args);
    };
    return ((0, jsx_runtime_1.jsxs)(ModalContext.Provider, { value: {
            openModal,
            closeModal: handleShift,
        }, children: [children, modalQueue.map((modal) => ((0, jsx_runtime_1.jsx)(__1.Modal.Overlay, { onClose: handleShift, children: modal.component }, modal.id)))] }));
}
function useModal() {
    return (0, react_1.useContext)(ModalContext);
}
