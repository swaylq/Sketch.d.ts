/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarPressAndHoldTransposerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    transposerDidCancel<R = void, P0 = NSTouchBarPressAndHoldTransposer>(_transposerDidCancel: P0): R;
    transposerDidEnd<R = void, P0 = NSTouchBarPressAndHoldTransposer>(_transposerDidEnd: P0): R;
  }
  namespace NSTouchBarPressAndHoldTransposerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
