/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRecentDocumentInfoProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    resolveURLWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_resolveURLWithCompletionHandler: P0): R;
    state<R = number>(): R;
    icon<R = NSImage>(): R;
    displayName<R = NSString>(): R;
    URL<R = NSURL>(): R;
  }
  namespace NSRecentDocumentInfoProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
