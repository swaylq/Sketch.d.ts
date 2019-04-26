/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVerticalOffsetSegmentedControl<T0 = void, T1 = void, T2 = void> extends NSSegmentedControl {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    setYOffset_forOperatingSystemVersion_backingScaleFactor<R = void, P0 = number, P1 = unknown, P2 = number>(_setYOffset: P0, _forOperatingSystemVersion: P1, _backingScaleFactor: P2): R;
    yOffsetFor<R = number, P0 = number>(_yOffsetFor: P0): R;
  }
  namespace MSVerticalOffsetSegmentedControl {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSegmentedControl {
      alloc<R = MSVerticalOffsetSegmentedControl>(): R;
      new: <R = MSVerticalOffsetSegmentedControl>() => R;
    }
  }
}

declare const MSVerticalOffsetSegmentedControl: cocoa.MSVerticalOffsetSegmentedControl.CLASS;
