/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers27MSConditionallyOffsetButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    setYOffset_forOperatingSystemVersion_backingScaleFactor<R = void, P0 = number, P1 = unknown, P2 = number>(_setYOffset: P0, _forOperatingSystemVersion: P1, _backingScaleFactor: P2): R;
    yOffsetFor<R = number, P0 = number>(_yOffsetFor: P0): R;
  }
  namespace _TtC17SketchControllers27MSConditionallyOffsetButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = _TtC17SketchControllers27MSConditionallyOffsetButton>(): R;
      new: <R = _TtC17SketchControllers27MSConditionallyOffsetButton>() => R;
    }
  }
}
