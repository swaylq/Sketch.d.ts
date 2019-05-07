/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextInspectorSection<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection, MSTextHeaderInspectorItemDelegateProtocol {
    paragraphStyleItem<R = MSParagraphStyleItem>(): R;
    setParagraphStyleItem<R = void, P0 = MSParagraphStyleItem>(_v: P0): R;
    missingFontItem<R = MSMissingFontItem>(): R;
    setMissingFontItem<R = void, P0 = MSMissingFontItem>(_v: P0): R;
    textItem<R = MSTextLayerItem>(): R;
    setTextItem<R = void, P0 = MSTextLayerItem>(_v: P0): R;
    headerItem<R = MSTextHeaderInspectorItem>(): R;
    setHeaderItem<R = void, P0 = MSTextHeaderInspectorItem>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSTextInspectorSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection, MSTextHeaderInspectorItemDelegateProtocol {
      alloc<R = MSTextInspectorSection>(): R;
      new: <R = MSTextInspectorSection>() => R;
    }
  }
}

declare const MSTextInspectorSection: cocoa.MSTextInspectorSection.CLASS;
