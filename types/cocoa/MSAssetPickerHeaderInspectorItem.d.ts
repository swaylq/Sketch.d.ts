/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPickerHeaderInspectorItem<T0 = void, T1 = void, T2 = void> extends MSColorHeaderInspectorItem {}
  namespace MSAssetPickerHeaderInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorHeaderInspectorItem {
      alloc<R = MSAssetPickerHeaderInspectorItem>(): R;
      new: <R = MSAssetPickerHeaderInspectorItem>() => R;
    }
  }
}

declare const MSAssetPickerHeaderInspectorItem: cocoa.MSAssetPickerHeaderInspectorItem.CLASS;
