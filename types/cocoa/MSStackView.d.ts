/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStackView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    isFlipped<R = boolean>(): R;
    adjustHeight_hasScrollViews<R = void, P0 = number, P1 = boolean>(_adjustHeight: P0, _hasScrollViews: P1): R;
    doStack<R = number>(): R;
    totalRequiredHeight<R = number>(): R;
    adjustScrollViewsToFitMaximumHeight<R = boolean>(): R;
    refreshMaximumHeightFromSubviews<R = number>(): R;
    stack<R = void, P0 = unknown>(_stack: P0): R;
    cancelOperation<R = void, P0 = unknown>(_cancelOperation: P0): R;
    awakeFromNib<R = void>(): R;
    keyResponder<R = unknown>(): R;
    setKeyResponder<R = void, P0 = unknown>(_v: P0): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
    minimumHeight<R = number>(): R;
    setMinimumHeight<R = void, P0 = number>(_v: P0): R;
    maximumHeight<R = number>(): R;
    setMaximumHeight<R = void, P0 = number>(_v: P0): R;
    autoupdatesMaximumHeight<R = boolean>(): R;
    setAutoupdatesMaximumHeight<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSStackView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSStackView>(): R;
      new: <R = MSStackView>() => R;
    }
  }
}

declare const MSStackView: cocoa.MSStackView.CLASS;
