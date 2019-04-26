/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSTextInputContextAuxiliaryStorage<T0 = void, T1 = void, T2 = void> extends NSObject {
    trackpadHandwritingPopoverTouchBarItem<R = NSPopoverTouchBarItem>(): R;
    setTrackpadHandwritingPopoverTouchBarItem<R = void, P0 = NSPopoverTouchBarItem>(_v: P0): R;
  }
  namespace __NSTextInputContextAuxiliaryStorage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = __NSTextInputContextAuxiliaryStorage>(): R;
      new: <R = __NSTextInputContextAuxiliaryStorage>() => R;
    }
  }
}
