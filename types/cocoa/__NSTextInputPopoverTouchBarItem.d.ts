/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSTextInputPopoverTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSPopoverTouchBarItem {
    dismissPopover_postESCKeyEvent<R = void, P0 = unknown, P1 = boolean>(_dismissPopover: P0, _postESCKeyEvent: P1): R;
    _allowsInvisiblePopover<R = boolean>(): R;
    postESCOnNextClose<R = boolean>(): R;
    setPostESCOnNextClose<R = void, P0 = boolean>(_v: P0): R;
    inputContext<R = NSTextInputContext>(): R;
    setInputContext<R = void, P0 = NSTextInputContext>(_v: P0): R;
    postsESCOnClose<R = boolean>(): R;
    setPostsESCOnClose<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace __NSTextInputPopoverTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopoverTouchBarItem {
      alloc<R = __NSTextInputPopoverTouchBarItem>(): R;
      new: <R = __NSTextInputPopoverTouchBarItem>() => R;
    }
  }
}
