/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface QLPreviewItemProtocol<T0 = void, T1 = void, T2 = void> {
    previewItemURL<R = NSURL>(): R;
    previewItemDisplayState<R = unknown>(): R;
    previewItemTitle<R = NSString>(): R;
  }
  namespace QLPreviewItemProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
