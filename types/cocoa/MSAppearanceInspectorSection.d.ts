/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAppearanceInspectorSection<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection {
    beginRenameSharedObject_completionBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_beginRenameSharedObject: P0, _completionBlock: P1): R;
    opacityItem<R = MSOpacityBlendingInspectorItem>(): R;
    setOpacityItem<R = void, P0 = MSOpacityBlendingInspectorItem>(_v: P0): R;
    sharedStyleItem<R = MSSharedStylesInspectorItem>(): R;
    setSharedStyleItem<R = void, P0 = MSSharedStylesInspectorItem>(_v: P0): R;
    headerItem<R = MSCollapsibleHeaderInspectorItem>(): R;
    setHeaderItem<R = void, P0 = MSCollapsibleHeaderInspectorItem>(_v: P0): R;
  }
  namespace MSAppearanceInspectorSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection {
      alloc<R = MSAppearanceInspectorSection>(): R;
      new: <R = MSAppearanceInspectorSection>() => R;
    }
  }
}

declare const MSAppearanceInspectorSection: cocoa.MSAppearanceInspectorSection.CLASS;
