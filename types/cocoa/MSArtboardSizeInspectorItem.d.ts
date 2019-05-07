/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardSizeInspectorItem<T0 = void, T1 = void, T2 = void> extends MSBaseSizeInspectorItem {
    refreshOrientationControl<R = void>(): R;
    selectOrientation<R = void, P0 = unknown>(_selectOrientation: P0): R;
    orientation<R = number>(): R;
    orientationSegmentedControl<R = NSSegmentedControl>(): R;
    setOrientationSegmentedControl<R = void, P0 = NSSegmentedControl>(_v: P0): R;
  }
  namespace MSArtboardSizeInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseSizeInspectorItem {
      alloc<R = MSArtboardSizeInspectorItem>(): R;
      new: <R = MSArtboardSizeInspectorItem>() => R;
    }
  }
}

declare const MSArtboardSizeInspectorItem: cocoa.MSArtboardSizeInspectorItem.CLASS;
