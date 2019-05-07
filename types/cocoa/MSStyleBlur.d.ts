/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleBlur<T0 = void, T1 = void, T2 = void> extends _MSStyleBlur {
    cropRadius<R = number>(): R;
    userVisibleMotionAngle<R = number>(): R;
    setUserVisibleMotionAngle<R = void, P0 = number>(_v: P0): R;
    // + MSStyleBlur(Inspector):
    userVisibleMotionAngle<R = number>(): R;
    setUserVisibleMotionAngle<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSStyleBlur {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSStyleBlur {
      alloc<R = MSStyleBlur>(): R;
      new: <R = MSStyleBlur>() => R;
      keyPathsForValuesAffectingUserVisibleMotionAngle<R = unknown>(): R;
      // + MSStyleBlur(Inspector): 
      keyPathsForValuesAffectingUserVisibleMotionAngle<R = unknown>(): R;
    }
  }
}

declare const MSStyleBlur: cocoa.MSStyleBlur.CLASS;
