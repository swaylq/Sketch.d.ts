/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSizeInspectorValueAdaptor<T0 = void, T1 = void, T2 = void> extends MSCoordinateInspectorValueAdaptor {
    anchorFromSuffix_axis<R = number, P0 = number, P1 = number>(_anchorFromSuffix: P0, _axis: P1): R;
  }
  namespace MSSizeInspectorValueAdaptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCoordinateInspectorValueAdaptor {
      alloc<R = MSSizeInspectorValueAdaptor>(): R;
      new: <R = MSSizeInspectorValueAdaptor>() => R;
    }
  }
}

declare const MSSizeInspectorValueAdaptor: cocoa.MSSizeInspectorValueAdaptor.CLASS;
