/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextStyleTouchBarAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, NSTouchBarDelegateProtocol {
    label<R = unknown>(): R;
    applySharedStyle<R = void, P0 = unknown>(_applySharedStyle: P0): R;
    textStyles<R = unknown>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSTextStyleTouchBarAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, NSTouchBarDelegateProtocol {
      alloc<R = MSTextStyleTouchBarAction>(): R;
      new: <R = MSTextStyleTouchBarAction>() => R;
    }
  }
}

declare const MSTextStyleTouchBarAction: cocoa.MSTextStyleTouchBarAction.CLASS;
