/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPreviewInspectorSection<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection, MSInspectorItemDelegateProtocol {
    addExportFormat<R = void, P0 = unknown>(_addExportFormat: P0): R;
    exportSelectedItem<R = MSExportSelectedInspectorItem>(): R;
    setExportSelectedItem<R = void, P0 = MSExportSelectedInspectorItem>(_v: P0): R;
    formatsItem<R = MSExportInspectorViewController>(): R;
    setFormatsItem<R = void, P0 = MSExportInspectorViewController>(_v: P0): R;
    footerItems<R = NSArray>(): R;
    setFooterItems<R = void, P0 = NSArray>(_v: P0): R;
    sliceHeader<R = MSHeader2InspectorItem>(): R;
    setSliceHeader<R = void, P0 = MSHeader2InspectorItem>(_v: P0): R;
    headerItem<R = MSExportPreviewHeaderInspectorItem>(): R;
    setHeaderItem<R = void, P0 = MSExportPreviewHeaderInspectorItem>(_v: P0): R;
    initialHeaderItem<R = MSExportInitialHeaderItem>(): R;
    setInitialHeaderItem<R = void, P0 = MSExportInitialHeaderItem>(_v: P0): R;
    colorItem<R = MSSliceBackgroundColorInspectorItem>(): R;
    setColorItem<R = void, P0 = MSSliceBackgroundColorInspectorItem>(_v: P0): R;
    groupContentsItem<R = MSSliceExportGroupContentsOnlyInspectorItem>(): R;
    setGroupContentsItem<R = void, P0 = MSSliceExportGroupContentsOnlyInspectorItem>(_v: P0): R;
    trimTransparencyItem<R = MSSliceTrimTransparencyInspectorItem>(): R;
    setTrimTransparencyItem<R = void, P0 = MSSliceTrimTransparencyInspectorItem>(_v: P0): R;
    imagesItem<R = MSExportPreviewImagesInspectorItem>(): R;
    setImagesItem<R = void, P0 = MSExportPreviewImagesInspectorItem>(_v: P0): R;
    hasContent<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSExportPreviewInspectorSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection, MSInspectorItemDelegateProtocol {
      alloc<R = MSExportPreviewInspectorSection>(): R;
      new: <R = MSExportPreviewInspectorSection>() => R;
    }
  }
}

declare const MSExportPreviewInspectorSection: cocoa.MSExportPreviewInspectorSection.CLASS;
