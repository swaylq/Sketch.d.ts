/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPanelColorWell<T0 = void, T1 = void, T2 = void> extends NSColorWell {
    setColor<R = void, P0 = unknown>(_setColor: P0): R;
    _drawWithStrokeColor<R = boolean, P0 = unknown>(__drawWithStrokeColor: P0): R;
    controlSize<R = number>(): R;
    setControlSize<R = void, P0 = number>(_setControlSize: P0): R;
    moveLeft<R = void, P0 = unknown>(_moveLeft: P0): R;
    moveRight<R = void, P0 = unknown>(_moveRight: P0): R;
    setActsLikeButton<R = void, P0 = boolean>(_setActsLikeButton: P0): R;
    setAcceptsColorDrops<R = void, P0 = boolean>(_setAcceptsColorDrops: P0): R;
  }
  namespace NSColorPanelColorWell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColorWell {
      alloc<R = NSColorPanelColorWell>(): R;
      new: <R = NSColorPanelColorWell>() => R;
    }
  }
}

declare const NSColorPanelColorWell: cocoa.NSColorPanelColorWell.CLASS;
