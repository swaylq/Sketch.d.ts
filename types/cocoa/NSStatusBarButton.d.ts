/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStatusBarButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    setDoubleAction<R = void, P0 = string>(_setDoubleAction: P0): R;
    doubleAction<R = string>(): R;
    selectionInset<R = NSEdgeInsets>(): R;
    setSelectionInset<R = void, P0 = NSEdgeInsets>(_setSelectionInset: P0): R;
    setLooksDisabled<R = void, P0 = boolean>(_setLooksDisabled: P0): R;
    looksDisabled<R = boolean>(): R;
    setStatusMenu<R = void, P0 = unknown>(_setStatusMenu: P0): R;
    statusMenu<R = unknown>(): R;
    initWithFrame_inStatusBar<R = unknown, P0 = CGRect, P1 = unknown>(_initWithFrame: P0, _inStatusBar: P1): R;
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
    appearsDisabled<R = boolean>(): R;
    setAppearsDisabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSStatusBarButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = NSStatusBarButton>(): R;
      new: <R = NSStatusBarButton>() => R;
    }
  }
}

declare const NSStatusBarButton: cocoa.NSStatusBarButton.CLASS;
