'use client';
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, } from 'react';
import { Modal } from '..';
import useAdjustScrollbar from '../../../hooks/useAdjustScrollbar';
var ModalContext = createContext({});
var id = 0;
function ModalProvider(_a) {
    var children = _a.children;
    var _b = useState([]), modalQueue = _b[0], setModalQueue = _b[1];
    var handleRemoveScrollbar = useAdjustScrollbar().handleRemoveScrollbar;
    useEffect(function () {
        handleRemoveScrollbar(modalQueue.length > 0);
    }, [handleRemoveScrollbar, modalQueue.length]);
    var openModal = function (component, onClose) {
        id++;
        setModalQueue(function (prevQueue) { return __spreadArray(__spreadArray([], prevQueue, true), [
            { id: "modal-".concat(id), component: component, onClose: onClose },
        ], false); });
    };
    var handleShift = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentModal;
        var newQueue = __spreadArray([], modalQueue, true);
        if (newQueue.length === 0) {
            setModalQueue([]);
        }
        currentModal = newQueue[newQueue.length - 1];
        newQueue.pop();
        setModalQueue(newQueue);
        (_a = currentModal === null || currentModal === void 0 ? void 0 : currentModal.onClose) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray([currentModal], args, false));
    };
    return (_jsxs(ModalContext.Provider, { value: {
            openModal: openModal,
            closeModal: handleShift,
        }, children: [children, modalQueue.map(function (modal) { return (_jsx(Modal.Overlay, { onClose: handleShift, children: modal.component }, modal.id)); })] }));
}
function useModal() {
    return useContext(ModalContext);
}
export { ModalProvider, useModal };
