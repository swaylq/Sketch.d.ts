/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThemeDocumentButton<T0 = void, T1 = void, T2 = void> extends NSDocumentDragButton {
    _invalidateDocumentIcon<R = void>(): R;
    representedURL<R = unknown>(): R;
    setRepresentedURL<R = void, P0 = unknown>(_setRepresentedURL: P0): R;
    _setRepresentedURL<R = void, P0 = unknown>(__setRepresentedURL: P0): R;
    _refreshDocumentIconAndDisplayNameForURL<R = void, P0 = unknown>(__refreshDocumentIconAndDisplayNameForURL: P0): R;
    documentEdited<R = boolean>(): R;
    setDocumentEdited<R = void, P0 = boolean>(_setDocumentEdited: P0): R;
    setFrameOrigin_ignoreRentry<R = void, P0 = CGPoint, P1 = boolean>(_setFrameOrigin: P0, _ignoreRentry: P1): R;
    pathCellClicked<R = void, P0 = unknown>(_pathCellClicked: P0): R;
    showPopup<R = void>(): R;
    _containingThemeFrameFromView<R = unknown, P0 = unknown>(__containingThemeFrameFromView: P0): R;
    menuLocationForLayoutDirection<R = CGPoint, P0 = boolean>(_menuLocationForLayoutDirection: P0): R;
  }
  namespace NSThemeDocumentButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDocumentDragButton {
      alloc<R = NSThemeDocumentButton>(): R;
      new: <R = NSThemeDocumentButton>() => R;
    }
  }
}

declare const NSThemeDocumentButton: cocoa.NSThemeDocumentButton.CLASS;
