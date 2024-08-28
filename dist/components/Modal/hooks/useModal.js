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
    return ((0, jsx_runtime_1.jsxs)(ModalContext.Provider, { value: {
            openModal,
            closeModal: handleShift,
        }, children: [children, modalQueue.map((modal) => ((0, jsx_runtime_1.jsx)(__1.Modal.Overlay, { onClose: handleShift, children: modal.component }, modal.id)))] }));
}
function useModal() {
    return (0, react_1.useContext)(ModalContext);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9ob29rcy91c2VNb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFlBQVksQ0FBQzs7Ozs7QUErQmIsc0NBbURDO0FBRUQsNEJBRUM7O0FBcEZELGlDQU1lO0FBQ2YsMEJBQTJCO0FBQzNCLG9GQUE0RDtBQWlCNUQsTUFBTSxZQUFZLEdBQUcsSUFBQSxxQkFBYSxFQUFDLEVBQXVCLENBQUMsQ0FBQztBQUU1RCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFWCxTQUFnQixhQUFhLENBQUMsRUFBRSxRQUFRLEVBQXNCO0lBQzVELE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFXLEVBQUUsQ0FBQyxDQUFDO0lBRTNELE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxHQUFHLElBQUEsNEJBQWtCLEdBQUUsQ0FBQztJQUV2RCxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ2IscUJBQXFCLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUUvQyxNQUFNLFNBQVMsR0FBRyxDQUFDLFNBQW9CLEVBQUUsT0FBb0IsRUFBRSxFQUFFO1FBQy9ELEVBQUUsRUFBRSxDQUFDO1FBRUwsYUFBYSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUMzQixHQUFHLFNBQVM7WUFDWixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUU7U0FDMUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQVMsRUFBRSxFQUFFOztRQUNuQyxJQUFJLFlBQW9CLENBQUM7UUFFekIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBRWpDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUMxQixhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUVELFlBQVksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU3QyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFZixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsTUFBQSxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsT0FBTyw2REFBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTCx3QkFBQyxZQUFZLENBQUMsUUFBUSxJQUNwQixLQUFLLEVBQUU7WUFDTCxTQUFTO1lBQ1QsVUFBVSxFQUFFLFdBQVc7U0FDeEIsYUFFQSxRQUFRLEVBRVIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FDekIsdUJBQUMsU0FBSyxDQUFDLE9BQU8sSUFBZ0IsT0FBTyxFQUFFLFdBQVcsWUFDL0MsS0FBSyxDQUFDLFNBQVMsSUFERSxLQUFLLENBQUMsRUFBRSxDQUVaLENBQ2pCLENBQUMsSUFDb0IsQ0FDekIsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFnQixRQUFRO0lBQ3RCLE9BQU8sSUFBQSxrQkFBVSxFQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLENBQUMifQ==