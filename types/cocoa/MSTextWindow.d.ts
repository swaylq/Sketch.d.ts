/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    cxx_destruct<R = void>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    addTextView_toView<R = void, P0 = unknown, P1 = unknown>(_addTextView: P0, _toView: P1): R;
    moveToRect_contentDrawViewRect_behaviour<R = void, P0 = CGRect, P1 = CGRect, P2 = number>(_moveToRect: P0, _contentDrawViewRect: P1, _behaviour: P2): R;
    initWithRect<R = unknown, P0 = CGRect>(_initWithRect: P0): R;
    textView<R = NSTextView>(): R;
    setTextView<R = void, P0 = NSTextView>(_v: P0): R;
    contentDrawView<R = MSContentDrawView>(): R;
    setContentDrawView<R = void, P0 = MSContentDrawView>(_v: P0): R;
  }
  namespace MSTextWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = MSTextWindow>(): R;
      new: <R = MSTextWindow>() => R;
      adjustFrameWidth_alignment<R = CGRect, P0 = CGRect, P1 = number>(_adjustFrameWidth: P0, _alignment: P1): R;
      adjustFrameHeight<R = CGRect, P0 = CGRect>(_adjustFrameHeight: P0): R;
      makeBiggerRect_withBehaviour_alignment<R = CGRect, P0 = CGRect, P1 = number, P2 = number>(_makeBiggerRect: P0, _withBehaviour: P1, _alignment: P2): R;
    }
  }
}

declare const MSTextWindow: cocoa.MSTextWindow.CLASS;
