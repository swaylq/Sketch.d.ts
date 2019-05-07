/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHotspotOverrideInspectorItem<T0 = void, T1 = void, T2 = void> extends MSOverrideInspectorItem, MSFlowMenuBuilderTargetProtocol {
    documentData<R = unknown>(): R;
    popup<R = NSPopUpButton>(): R;
    setPopup<R = void, P0 = NSPopUpButton>(_v: P0): R;
  }
  namespace MSHotspotOverrideInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideInspectorItem, MSFlowMenuBuilderTargetProtocol {
      alloc<R = MSHotspotOverrideInspectorItem>(): R;
      new: <R = MSHotspotOverrideInspectorItem>() => R;
    }
  }
}

declare const MSHotspotOverrideInspectorItem: cocoa.MSHotspotOverrideInspectorItem.CLASS;
