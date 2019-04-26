/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputAlignmentGuideProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    referenceValues<R = NSArray>(): R;
    guideType<R = number>(): R;
  }
  namespace NSInputAlignmentGuideProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
