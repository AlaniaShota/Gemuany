// app/components/banner/bannerConfig.ts
export type BannerVariant = "split" | "full" | "header";
export type BannerPageType = "home" | "about" | "blog" | "contact";

export const pageTextConfig: Record<BannerPageType, string> = {
  home: "w-7/8",
  about: "w-full",
  blog: "w-full",
  contact: "w-full",
};

export const layoutConfig = {
  split: {
    containerClass:
      "relative lg:w-4/5 max-sm:w-full mx-auto grid lg:grid-cols-2 max-sm:grid-cols-1 my-20 max-sm:my-0 h-[493px] max-sm:h-screen",
    textWrapperClass:
      "lg:static max-sm:absolute inset-x-0 max-sm:bg-black/30 max-sm:h-screen top-0 flex justify-center items-start max-sm:py-0 z-40",
    imageWrapperClass:
      "relative w-full h-full flex justify-center items-center",
    imageClass: "object-cover w-full h-full",
    overlayClass: "",
    textAlignClass: "text-start",
  },
  full: {
    containerClass:
      "relative w-full max-w-[1600px] flex justify-center items-center  my-20",
    textWrapperClass:
      "absolute z-20 w-4/5 text-white flex flex-col justify-start items-start gap-8 max-sm:gap-5 top-1/3 max-sm:top-1/4",
    textAlignClass: "text-start w-1/2",
    imageWrapperClass: "relative w-4/5 h-[630px] max-sm:h-[493px]",
    imageClass: "object-cover w-full h-full",
    overlayClass: "absolute inset-0 w-full h-full bg-black/50 z-10",
  },
  header: {
    containerClass:
      "relative w-full flex justify-center items-center  max-sm:my-20 mb-40",
    textWrapperClass:
      "absolute z-20 w-full text-white flex flex-col px-40 justify-center items-center gap-8 max-sm:gap-5 top-1/3 max-sm:top-1/4",
    textAlignClass: "text-center w-full ",
    imageWrapperClass: "relative w-full h-[630px] max-sm:h-[493px]",
    imageClass: "object-cover w-full h-full",
    overlayClass: "absolute inset-0 w-full h-full bg-black/50 z-10",
  },
} as const;
