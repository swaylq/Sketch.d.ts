/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarEscapeKeyViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    refreshSubviews<R = void>(): R;
    constraintsDidChangeInEngine<R = void, P0 = unknown>(_constraintsDidChangeInEngine: P0): R;
    _noteTouchBarItemViewChanged<R = void>(): R;
    _measuredPreferredSize<R = CGSize>(): R;
    preferredSize<R = CGSize>(): R;
    touchBarItem<R = NSTouchBarItem>(): R;
    setTouchBarItem<R = void, P0 = NSTouchBarItem>(_v: P0): R;
  }
  namespace NSTouchBarEscapeKeyViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = NSTouchBarEscapeKeyViewController>(): R;
      new: <R = NSTouchBarEscapeKeyViewController>() => R;
    }
  }
}

declare const NSTouchBarEscapeKeyViewController: cocoa.NSTouchBarEscapeKeyViewController.CLASS;
