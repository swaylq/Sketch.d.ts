/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface QLPreviewPanelDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    previewPanel_transitionImageForPreviewItem_contentRect<R = unknown, P0 = QLPreviewPanel, P1 = QLPreviewItem, P2 = CGRect>(_previewPanel: P0, _transitionImageForPreviewItem: P1, _contentRect: P2): R;
    previewPanel_sourceFrameOnScreenForPreviewItem<R = CGRect, P0 = QLPreviewPanel, P1 = QLPreviewItem>(_previewPanel: P0, _sourceFrameOnScreenForPreviewItem: P1): R;
    previewPanel_handleEvent<R = boolean, P0 = QLPreviewPanel, P1 = NSEvent>(_previewPanel: P0, _handleEvent: P1): R;
  }
  namespace QLPreviewPanelDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
