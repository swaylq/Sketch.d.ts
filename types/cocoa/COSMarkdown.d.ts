/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface COSMarkdown<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace COSMarkdown {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = COSMarkdown>(): R;
      new: <R = COSMarkdown>() => R;
    }
  }
}

declare const COSMarkdown: cocoa.COSMarkdown.CLASS;
