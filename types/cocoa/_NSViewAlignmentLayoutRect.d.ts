/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewAlignmentLayoutRect<T0 = void, T1 = void, T2 = void> extends NSLayoutRect {
    heightAnchor<R = unknown>(): R;
    widthAnchor<R = unknown>(): R;
    bottomAnchor<R = unknown>(): R;
    centerYAnchor<R = unknown>(): R;
    topAnchor<R = unknown>(): R;
    trailingAnchor<R = unknown>(): R;
    centerXAnchor<R = unknown>(): R;
    leadingAnchor<R = unknown>(): R;
    initWithHostItem<R = unknown, P0 = unknown>(_initWithHostItem: P0): R;
    hostItem<R = NSAKLayoutItem>(): R;
  }
  namespace _NSViewAlignmentLayoutRect {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLayoutRect {
      alloc<R = _NSViewAlignmentLayoutRect>(): R;
      new: <R = _NSViewAlignmentLayoutRect>() => R;
    }
  }
}
