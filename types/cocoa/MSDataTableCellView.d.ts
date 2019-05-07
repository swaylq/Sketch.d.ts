/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataTableCellView<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
    cxx_destruct<R = void>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    awakeFromNib<R = void>(): R;
    revealButton<R = NSButton>(): R;
    setRevealButton<R = void, P0 = NSButton>(_v: P0): R;
    previewContainer<R = MSDataPreview>(): R;
    setPreviewContainer<R = void, P0 = MSDataPreview>(_v: P0): R;
    dataPreferencePane<R = MSDataPreferencePane>(): R;
    setDataPreferencePane<R = void, P0 = MSDataPreferencePane>(_v: P0): R;
    secondaryTextField<R = NSTextField>(): R;
    setSecondaryTextField<R = void, P0 = NSTextField>(_v: P0): R;
    primaryTextField<R = NSTextField>(): R;
    setPrimaryTextField<R = void, P0 = NSTextField>(_v: P0): R;
    dataPreferenceItem<R = MSDataPreferenceItem>(): R;
  }
  namespace MSDataTableCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
      alloc<R = MSDataTableCellView>(): R;
      new: <R = MSDataTableCellView>() => R;
    }
  }
}

declare const MSDataTableCellView: cocoa.MSDataTableCellView.CLASS;
