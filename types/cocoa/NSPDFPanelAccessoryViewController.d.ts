/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPDFPanelAccessoryViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    setOrientation<R = void, P0 = unknown>(_setOrientation: P0): R;
    changePaper<R = void, P0 = unknown>(_changePaper: P0): R;
    populateMenu_withPaperList<R = unknown, P0 = unknown, P1 = unknown>(_populateMenu: P0, _withPaperList: P1): R;
    awakeFromNib<R = void>(): R;
    _setPrintInfo<R = void, P0 = unknown>(__setPrintInfo: P0): R;
    _printInfo<R = unknown>(): R;
    initWithOptions_customAccessoryViewController<R = unknown, P0 = number, P1 = unknown>(_initWithOptions: P0, _customAccessoryViewController: P1): R;
    pdfInfo<R = NSPDFInfo>(): R;
  }
  namespace NSPDFPanelAccessoryViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = NSPDFPanelAccessoryViewController>(): R;
      new: <R = NSPDFPanelAccessoryViewController>() => R;
    }
  }
}

declare const NSPDFPanelAccessoryViewController: cocoa.NSPDFPanelAccessoryViewController.CLASS;
