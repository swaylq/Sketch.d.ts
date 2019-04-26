/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSNewSchoolCenteringAdapter<T0 = void, T1 = void, T2 = void> extends NSSaveAccessoryAdapter {
    accFrameChanged<R = void, P0 = unknown>(_accFrameChanged: P0): R;
    adapt_andTrackConstraints<R = void, P0 = unknown, P1 = unknown>(_adapt: P0, _andTrackConstraints: P1): R;
    trackedConstraints<R = NSArray>(): R;
    setTrackedConstraints<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace _NSNewSchoolCenteringAdapter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSaveAccessoryAdapter {
      alloc<R = _NSNewSchoolCenteringAdapter>(): R;
      new: <R = _NSNewSchoolCenteringAdapter>() => R;
    }
  }
}
