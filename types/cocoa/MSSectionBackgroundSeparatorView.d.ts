/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSectionBackgroundSeparatorView<T = any> extends NSView {
    wantsSeparatorBetweenSelfAndView<R = boolean, P0 = unknown>(_wantsSeparatorBetweenSelfAndView: P0): R;
    color<R = unknown>(): R;
    edgeInsets<R = NSEdgeInsets>(): R;
    setEdgeInsets<R = void, P0 = NSEdgeInsets>(_v: P0): R;
  }
  namespace classes {
    export interface MSSectionBackgroundSeparatorView<T = any> extends NSView {
      alloc<R = MSSectionBackgroundSeparatorView>(): R;
      new: <R = MSSectionBackgroundSeparatorView>() => R;
      separatorWithInsets<R = unknown, P0 = NSEdgeInsets>(_separatorWithInsets: P0): R;
      separatorWithInsets_width<R = unknown, P0 = NSEdgeInsets, P1 = number>(_separatorWithInsets: P0, _width: P1): R;
      separator<R = unknown>(): R;
    }
  }
}

declare const MSSectionBackgroundSeparatorView: cocoa.classes.MSSectionBackgroundSeparatorView;
