/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugTouchBarModel<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    description<R = unknown>(): R;
    addWarning<R = void, P0 = unknown>(_addWarning: P0): R;
    hash<R = number>(): R;
    isSuppressed<R = boolean>(): R;
    setIsSuppressed<R = void, P0 = boolean>(_v: P0): R;
    warnings<R = NSArray>(): R;
    touchBar<R = NSTouchBar>(): R;
    setTouchBar<R = void, P0 = NSTouchBar>(_v: P0): R;
    responderDescription<R = NSString>(): R;
    setResponderDescription<R = void, P0 = NSString>(_v: P0): R;
    className<R = NSString>(): R;
    setClassName<R = void, P0 = NSString>(_v: P0): R;
    address<R = void>(): R;
    setAddress<R = void, P0 = void>(_v: P0): R;
    prettyDescription<R = NSString>(): R;
  }
  namespace NSDebugTouchBarModel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDebugTouchBarModel>(): R;
      new: <R = NSDebugTouchBarModel>() => R;
    }
  }
}

declare const NSDebugTouchBarModel: cocoa.NSDebugTouchBarModel.CLASS;
