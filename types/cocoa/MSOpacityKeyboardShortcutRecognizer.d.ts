/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOpacityKeyboardShortcutRecognizer<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    discardAccumulatedEvents<R = void>(): R;
    opacityFromCharacters<R = number, P0 = unknown>(_opacityFromCharacters: P0): R;
    keyDown<R = void, P0 = unknown>(_keyDown: P0): R;
    initWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_initWithTarget: P0, _action: P1): R;
    opacity<R = number>(): R;
    concatenationDuration<R = number>(): R;
    setConcatenationDuration<R = void, P0 = number>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace MSOpacityKeyboardShortcutRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSOpacityKeyboardShortcutRecognizer>(): R;
      new: <R = MSOpacityKeyboardShortcutRecognizer>() => R;
    }
  }
}

declare const MSOpacityKeyboardShortcutRecognizer: cocoa.MSOpacityKeyboardShortcutRecognizer.CLASS;
