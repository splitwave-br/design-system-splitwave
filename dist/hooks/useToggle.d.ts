import { Dispatch, SetStateAction } from "react";
export declare function useToggle(defaultValue?: boolean): [boolean, () => void, Dispatch<SetStateAction<boolean>>];
