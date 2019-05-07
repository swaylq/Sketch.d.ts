/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewCompletionWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilityIsChildOfApp<R = boolean>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    canBecomeVisibleWithoutLogin<R = boolean>(): R;
  }
  namespace NSTextViewCompletionWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSTextViewCompletionWindow>(): R;
      new: <R = NSTextViewCompletionWindow>() => R;
    }
  }
}

declare const NSTextViewCompletionWindow: cocoa.NSTextViewCompletionWindow.CLASS;
