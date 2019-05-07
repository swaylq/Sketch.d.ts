/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentConflict<T0 = void, T1 = void, T2 = void> extends NSObject {
    previewItemTitle<R = unknown>(): R;
    previewItemURL<R = unknown>(): R;
    dealloc<R = void>(): R;
    startLoadingDocumentThumbnailWithSize_scaleFactor_force<R = void, P0 = CGSize, P1 = number, P2 = boolean>(_startLoadingDocumentThumbnailWithSize: P0, _scaleFactor: P1, _force: P2): R;
    nameAndDateText<R = unknown>(): R;
    originText<R = unknown>(): R;
    documentIsShared<R = boolean>(): R;
    setDocumentIsShared<R = void, P0 = boolean>(_v: P0): R;
    showName<R = boolean>(): R;
    setShowName<R = void, P0 = boolean>(_v: P0): R;
    thumbnail<R = NSImage>(): R;
    setThumbnail<R = void, P0 = NSImage>(_v: P0): R;
    version<R = NSFileVersion>(): R;
    setVersion<R = void, P0 = NSFileVersion>(_v: P0): R;
    controller<R = NSDocumentConflictPanelController>(): R;
    setController<R = void, P0 = NSDocumentConflictPanelController>(_v: P0): R;
    selected<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSDocumentConflict {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSDocumentConflict>(): R;
      new: <R = _NSDocumentConflict>() => R;
    }
  }
}
