/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyViewProviderProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    preferredFirstResponder<R = NSView>(): R;
    lastKeyView<R = NSView>(): R;
    firstKeyView<R = NSView>(): R;
  }
  namespace MSKeyViewProviderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
