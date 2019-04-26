/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBar<T0 = void, T1 = void, T2 = void> extends NSObject, NSAnimatablePropertyContainerProtocol, NSCodingProtocol {}
  namespace NSTouchBar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSAnimatablePropertyContainerProtocol, NSCodingProtocol {
      alloc<R = NSTouchBar>(): R;
      new: <R = NSTouchBar>() => R;
      automaticallyNotifiesObserversOfVisible<R = boolean>(): R;
    }
  }
}

declare const NSTouchBar: cocoa.NSTouchBar.CLASS;
