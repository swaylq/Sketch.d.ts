/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStackViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    stackView_didReattachViews<R = void, P0 = NSStackView, P1 = NSArray>(_stackView: P0, _didReattachViews: P1): R;
    stackView_willDetachViews<R = void, P0 = NSStackView, P1 = NSArray>(_stackView: P0, _willDetachViews: P1): R;
  }
  namespace NSStackViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
