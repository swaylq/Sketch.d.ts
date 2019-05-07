/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarEscapeKeyView<T0 = void, T1 = void, T2 = void> extends NSView, NSISEngineDelegateProtocol {
    preferredDelegate<R = NSTouchBarEscapeKeyViewController>(): R;
    setPreferredDelegate<R = void, P0 = NSTouchBarEscapeKeyViewController>(_v: P0): R;
  }
  namespace NSTouchBarEscapeKeyView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSISEngineDelegateProtocol {
      alloc<R = NSTouchBarEscapeKeyView>(): R;
      new: <R = NSTouchBarEscapeKeyView>() => R;
    }
  }
}

declare const NSTouchBarEscapeKeyView: cocoa.NSTouchBarEscapeKeyView.CLASS;
