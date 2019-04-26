/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDiscardableContentProtocol<T0 = void, T1 = void, T2 = void> {
    isContentDiscarded<R = boolean>(): R;
    discardContentIfPossible<R = void>(): R;
    endContentAccess<R = void>(): R;
    beginContentAccess<R = boolean>(): R;
  }
  namespace NSDiscardableContentProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
