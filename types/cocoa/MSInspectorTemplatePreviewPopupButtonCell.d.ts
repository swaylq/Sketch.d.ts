/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTemplatePreviewPopupButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorPreviewPopupButtonCell {}
  namespace MSInspectorTemplatePreviewPopupButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorPreviewPopupButtonCell {
      alloc<R = MSInspectorTemplatePreviewPopupButtonCell>(): R;
      new: <R = MSInspectorTemplatePreviewPopupButtonCell>() => R;
    }
  }
}

declare const MSInspectorTemplatePreviewPopupButtonCell: cocoa.MSInspectorTemplatePreviewPopupButtonCell.CLASS;
