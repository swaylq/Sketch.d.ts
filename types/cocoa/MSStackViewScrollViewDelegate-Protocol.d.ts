/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStackViewScrollViewDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    stackScrollViewDidScroll<R = void, P0 = NSScrollView>(_stackScrollViewDidScroll: P0): R;
  }
  namespace MSStackViewScrollViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
