/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPaddingInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
    updateView<R = void>(): R;
    wantsInsetSeparator<R = boolean>(): R;
    setWantsInsetSeparator<R = void, P0 = boolean>(_v: P0): R;
    wantsSeparator<R = boolean>(): R;
    setWantsSeparator<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSPaddingInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSPaddingInspectorItem>(): R;
      new: <R = MSPaddingInspectorItem>() => R;
      paddingWithHeight<R = unknown, P0 = number>(_paddingWithHeight: P0): R;
    }
  }
}

declare const MSPaddingInspectorItem: cocoa.MSPaddingInspectorItem.CLASS;
