/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewDrawOperation<T0 = void, T1 = void, T2 = void> extends NSOperation {
    view<R = unknown>(): R;
    initWithView_rect_rectSet_windowRegion_options_owningDisplayOperation<R = unknown, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown, P4 = number, P5 = unknown>(_initWithView: P0, _rect: P1, _rectSet: P2, _windowRegion: P3, _options: P4, _owningDisplayOperation: P5): R;
  }
  namespace _NSViewDrawOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = _NSViewDrawOperation>(): R;
      new: <R = _NSViewDrawOperation>() => R;
    }
  }
}
