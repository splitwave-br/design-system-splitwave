"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const Button_1 = require("../../components/Button");
const ButtonLink = ({ href, children, ...props }) => {
    const router = (0, navigation_1.useRouter)();
    const onClick = (0, react_1.useCallback)((e) => {
        e.preventDefault();
        router.push(href);
    }, [href]);
    return ((0, jsx_runtime_1.jsx)(Button_1.Button, { ...props, onClick: onClick, children: children }));
};
exports.ButtonLink = ButtonLink;
