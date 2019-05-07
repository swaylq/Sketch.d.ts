/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPreviewView<T0 = void, T1 = void, T2 = void> extends NSView, NSDraggingSourceProtocol, NSPasteboardWritingProtocol {
    cxx_destruct<R = void>(): R;
    beginDragWithEvent<R = void, P0 = unknown>(_beginDragWithEvent: P0): R;
    imageDrawRect<R = CGRect>(): R;
    setup<R = void>(): R;
    awakeFromNib<R = void>(): R;
    initWithViewModel<R = unknown, P0 = unknown>(_initWithViewModel: P0): R;
    viewModel<R = MSExportPreviewViewModel>(): R;
    setViewModel<R = void, P0 = MSExportPreviewViewModel>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSExportPreviewView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSDraggingSourceProtocol, NSPasteboardWritingProtocol {
      alloc<R = MSExportPreviewView>(): R;
      new: <R = MSExportPreviewView>() => R;
    }
  }
}

declare const MSExportPreviewView: cocoa.MSExportPreviewView.CLASS;
