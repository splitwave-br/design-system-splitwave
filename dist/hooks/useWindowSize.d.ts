type WindowSize = {
    width: number | undefined;
    height: number | undefined;
};
declare const useWindowSize: () => {
    size: WindowSize;
    isMobile: boolean;
};
export default useWindowSize;
