/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageKitViewTextAttachmentCellHelper<T0 = void, T1 = void, T2 = void> extends NSViewTextAttachmentCellHelper {
    viewFrameChanged<R = void, P0 = unknown>(_viewFrameChanged: P0): R;
    setCharacterIndex<R = void, P0 = number>(_setCharacterIndex: P0): R;
    characterIndex<R = number>(): R;
  }
  namespace NSImageKitViewTextAttachmentCellHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewTextAttachmentCellHelper {
      alloc<R = NSImageKitViewTextAttachmentCellHelper>(): R;
      new: <R = NSImageKitViewTextAttachmentCellHelper>() => R;
    }
  }
}

declare const NSImageKitViewTextAttachmentCellHelper: cocoa.NSImageKitViewTextAttachmentCellHelper.CLASS;
