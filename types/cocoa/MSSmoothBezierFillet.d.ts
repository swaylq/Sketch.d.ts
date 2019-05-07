/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSmoothBezierFillet<T0 = void, T1 = void, T2 = void> extends MSBezierFillet {
    arcSegments<R = NSArray>(): R;
    setArcSegments<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace MSSmoothBezierFillet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBezierFillet {
      alloc<R = MSSmoothBezierFillet>(): R;
      new: <R = MSSmoothBezierFillet>() => R;
      smoothBezierFilletWithLineSegment1_lineSegment2_filletRadius<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_smoothBezierFilletWithLineSegment1: P0, _lineSegment2: P1, _filletRadius: P2): R;
    }
  }
}

declare const MSSmoothBezierFillet: cocoa.MSSmoothBezierFillet.CLASS;
