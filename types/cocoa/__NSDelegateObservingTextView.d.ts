/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSDelegateObservingTextView<T0 = void, T1 = void, T2 = void> extends NSTextView {
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
  }
  namespace __NSDelegateObservingTextView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextView {
      alloc<R = __NSDelegateObservingTextView>(): R;
      new: <R = __NSDelegateObservingTextView>() => R;
    }
  }
}
