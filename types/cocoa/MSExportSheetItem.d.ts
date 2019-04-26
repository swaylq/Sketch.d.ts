/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportSheetItem<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem {
    cxx_destruct<R = void>(): R;
    subTitle<R = unknown>(): R;
    exportPreviewOperationDidFinish<R = void, P0 = unknown>(_exportPreviewOperationDidFinish: P0): R;
    loadUI<R = void>(): R;
    awakeFromNib<R = void>(): R;
    showWarningLabel<R = boolean>(): R;
    setShowWarningLabel<R = void, P0 = boolean>(_v: P0): R;
    exportSheet<R = MSExportSheet>(): R;
    setExportSheet<R = void, P0 = MSExportSheet>(_v: P0): R;
    warningView<R = NSImageView>(): R;
    setWarningView<R = void, P0 = NSImageView>(_v: P0): R;
    checkBox<R = NSButton>(): R;
    setCheckBox<R = void, P0 = NSButton>(_v: P0): R;
    subTitleField<R = NSTextField>(): R;
    setSubTitleField<R = void, P0 = NSTextField>(_v: P0): R;
    titleField<R = NSTextField>(): R;
    setTitleField<R = void, P0 = NSTextField>(_v: P0): R;
    previewContainer<R = NSView>(): R;
    setPreviewContainer<R = void, P0 = NSView>(_v: P0): R;
    isExportable<R = boolean>(): R;
    setIsExportable<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSExportSheetItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem {
      alloc<R = MSExportSheetItem>(): R;
      new: <R = MSExportSheetItem>() => R;
    }
  }
}

declare const MSExportSheetItem: cocoa.MSExportSheetItem.CLASS;
