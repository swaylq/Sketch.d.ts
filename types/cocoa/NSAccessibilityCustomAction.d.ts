/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomAction<T0 = void, T1 = void, T2 = void> extends NSObject {
    selector<R = string>(): R;
    setSelector<R = void, P0 = string>(_v: P0): R;
  }
  namespace NSAccessibilityCustomAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilityCustomAction>(): R;
      new: <R = NSAccessibilityCustomAction>() => R;
    }
  }
}

declare const NSAccessibilityCustomAction: cocoa.NSAccessibilityCustomAction.CLASS;
