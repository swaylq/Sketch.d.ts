/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAquaUserInterfaceTheme<T0 = void, T1 = void, T2 = void> extends NSUserInterfaceTheme {
    _ruleForView_comparedToView_withEdge<R = NSIBSnapSet, P0 = unknown, P1 = unknown, P2 = unknown>(__ruleForView: P0, _comparedToView: P1, _withEdge: P2): R;
    _ruleForView_comparedToContainer_withEdge<R = NSIBSnapSet, P0 = unknown, P1 = unknown, P2 = unknown>(__ruleForView: P0, _comparedToContainer: P1, _withEdge: P2): R;
  }
  namespace NSAquaUserInterfaceTheme {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSUserInterfaceTheme {
      alloc<R = NSAquaUserInterfaceTheme>(): R;
      new: <R = NSAquaUserInterfaceTheme>() => R;
    }
  }
}

declare const NSAquaUserInterfaceTheme: cocoa.NSAquaUserInterfaceTheme.CLASS;
